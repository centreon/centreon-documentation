---
id: sc-service-now-em-events
title: ServiceNow Event Manager Events
description: "Send host and service status events to ServiceNow Event Manager"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The ServiceNow Event Manager Events stream connector allows you to send data from Centreon to ServiceNow Event Manager instances.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote 
server or a poller (e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install 
the stream connector on a poller or a remote server within your customer's infrastructure).
- By default, the ServiceNow Event Manager Events stream connector sends data from [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. 
The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you 
[filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-servicenow-event-manager).

## Installation

Perform the installation on the server that will send data to ServiceNow Event Manager (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

<Tabs groupId="os" queryString>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-servicenow
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-servicenow
```

</TabItem>

<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt install centreon-stream-connector-servicenow
```

</TabItem>
</Tabs>

## Configuring your ServiceNow Event Manager equipment

You may need to configure your ServiceNow Event Manager equipment so that it can receive data from Centreon. Please refer to ServiceNow Event Manager's documentation.
Make sure ServiceNow Event Manager is able to receive data sent by Centreon: flows must not be blocked by ServiceNow Event Manager's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                         |
| --------------- | ------------------------------------------------------------- |
| Name            | Servicenow events                                             |
| Path            | /usr/share/centreon-broker/lua/servicenow-em-events-apiv2.lua |
| Filter category | Neb                                                           |

5. To enable Centreon to connect to your ServiceNow Event Manager equipment, fill in the following mandatory parameters. 
The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name          | Value explanation                    | Value exemple |
| ------ | ------------- |--------------------------------------| ------------- |
| string | instance      | The name of the ServiceNow instance | MyCompany     |
| string | client_id     | The Oauth client_id                  |               |
| string | client_secret | The Oauth client_secret              |               |
| string | username      | The Oauth user                       |               |
| string | password      | The Oauth password                    |               |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name      | Value explanation                          | default value                                               |
| ------ | --------- |--------------------------------------------| ----------------------------------------------------------- |
| string | logfile   | The file in which logs are written         | /var/log/centreon-broker/servicenow-em-stream-connector.log |
| number | log_level | Logging level from 1 (errors) to 3 (debug) | 1                                                           |

7. Use the stream connector's optional parameters to
[filter or adapt the data you want Centreon to send to ServiceNow Event Manager](#filtering-or-adapting-the-data-you-want-to-send-to-servicenow-event-manager).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

ServiceNow Event Manager should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to ServiceNow Event Manager

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), 
that allow you to filter the data you will send to your ServiceNow Event Manager equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. 
For example, if you want to only send to ServiceNow Event Manager the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the ServiceNow Event Manager Events stream connector, the following values always override the default values, you do not need to define them in the interface.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the ServiceNow Event Manager REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "records": [{
    "source": "centreon",
    "event_class": "centreon",
    "severity": 5,
    "node": "my_host",
    "resource": "my_service",
    "time_of_event": "2022-09-06 11:52:12",
    "description": "CRITICAL: USB cable behaving like a water hose"
  }]
}
```

### host_status event

```json
{
  "records": [{
    "source": "centreon",
    "event_class": "centreon",
    "severity": 5,
    "node": "my_host",
    "resource": "my_host",
    "time_of_event": "2022-09-06 11:52:12",
    "description": "DOWN: someone plugged an UPS on another UPS to create infinite energy"
  }]
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. 
It also allows you to handle event types that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                              |
| ------ | ----------- | -------------------------------------------------- |
| string | format_file | /etc/centreon-broker/servicenow-em-events-format.json |

> The event format configuration file must be readable by the centreon-broker user.

To learn more about custom event formats and templating files, visit **[this page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

Here is the list of all the curl commands that are used by the stream connector.

You must replace all the *`<xxxx>`* inside the below commands with their appropriate value. *`<instance>`* may become *MyCompany*.

### Get OAuth tokens

If you want to test if you can get 0Auth tokens from ServiceNow Event Manager correctly:

1. Log in to the server that you configured to send events to ServiceNow Event Manager (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" 'https://<instance_name>.service-now.com/oauth_token.do' -d 'grant_type=password&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>'
```

### Refresh OAuth tokens

If you want to test if you can refresh 0Auth tokens from ServiceNow Event Manager correctly:

1. Log in to the server that you configured to send events to ServiceNow Event Manager (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" 'https://<instance_name>.service-now.com/oauth_token.do' -d 'grant_type=refresh_token&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>&refresh_token=<refresh_token>'
```

The *`<refresh_token>`* is obtained thanks to **[this curl](#get-oauth-tokens)**.

### Sending events

If you want to test that events are sent to ServiceNow Event Manager correctly:

1. Log in to the server that you configured to send events to ServiceNow Event Manager (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H 'content-type: application/json' -H 'Accept: application/json' -H 'Authorization: Bearer <access_token>' 'https://<instance_name>.service-now.com/api/global/em/jsonv2' -d '{"records":[{"source": "centreon","event_class": "centreon","severity": 5,"node": "my_host","resource": "my_service","time_of_event": "2022-09-06 11:52:12","description": "CRITICAL: USB cable behaving like a water hose"}]}'
```

The *`<access_token>`* is obtained thanks to **[this curl](#get-oauth-tokens)**.

3. Check that the event has been received by ServiceNow Event Manager.

