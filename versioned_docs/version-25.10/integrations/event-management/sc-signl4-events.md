---
id: sc-signl4-events
title: Signl4 Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Signl4 Events stream connector allows you to send data from Centreon to Signl4 instances.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller 
(e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or a remote server within your customer's infrastructure).
- By default, the Signl4 Events stream connector sends data from [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-signl4).

## Installation

Perform the installation on the server that will send data to Signl4 (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

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

## Configuring your Signl4 server

You may need to configure your Signl4 server so that it can receive data from Centreon. Please refer to Signl4's documentation.
Make sure Signl4 is able to receive data sent by Centreon: flows must not be blocked by Signl4's configuration or by a security device.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                  |
| --------------- |--------------------------------------------------------|
| Name            | Signl4 events                                          |
| Path            | /usr/share/centreon-broker/lua/signl4-events-apiv2.lua |
| Filter category | Neb                                                    |

5. To enable Centreon to connect to your Signl4 equipment, fill in the following mandatory parameters. 
The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name        | Value explanation | Value exemple |
| ------ |-------------|-------------------|---------------|
| string | team_secret | Team secret       | x3x[..]2c     |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name               | Value explanation                          | Default value                              |
| ------ |--------------------|--------------------------------------------|--------------------------------------------|
| string | logfile            | The file in which logs are written         | /var/log/centreon-broker/signl4-events.log |
| number | log_level          | Logging level from 1 (errors) to 3 (debug) | 1                                          |
| string | server_address     | URL of your Signl4 instance | `https://connect.signl4.com`               |
| string | x_s4_source_system | Source system to display in Signl4         | Centreon                                   |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Signl4](#filtering-or-adapting-the-data-you-want-to-send-to-signl4).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

Signl4 should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Signl4

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), 
that allow you to filter the data you will send to your Signl4 equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. 
For example, if you want to only send to Signl4 the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Signl4 Events stream connector, the following values always override the default values, you do not need to define them in the interface.

Some of them are overridden by this stream connector.

| Type   | Name                 | Default value for the stream connector |
| ------ |----------------------|----------------------------------------|
| string | accepted_categories  | neb                                    |
| string | accepted_elements    | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Signl4 REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

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

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. 
It also allows you to handle event types that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                          |
| ------ | ----------- |------------------------------------------------|
| string | format_file | /etc/centreon-broker/signl4-events-format.json |

> The event format configuration file must be readable by the **centreon-broker** user.

To learn more about custom event formats and templating files, visit **[this page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

### Sending events

You can trigger a signal with the following command:

1. Log in to the server that you configured to send events to Signl4 (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H 'content-type: application/json' 'https://connect.signl4.com/webhook/<team_secret>' -d '{"EventType": "HOST","Date": "Fri Nov 26 11:54:29 CET 2021","Host": "Highway","Message": "to hell!","Status": "DOWN", "Title": "Highway is DOWN", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "new"}'
```

You must replace all the *`<xxxx>`* inside the above command with the correct value. `team_secret` may become *x3x[..]2c*.

3. Check that the event has been received by Signl4.

You can then notify the signal alert is closed with the following command:

```shell
curl -X POST -H 'content-type: application/json' 'https://connect.signl4.com/webhook/<team_secret>' -d '{"EventType": "HOST","Date": "Fri Nov 26 12:00:00 CET 2021","Host": "Highway","Message": "to hell!","Status": "OK", "Title": "Highway is UP", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "resolved"}'
```

You must replace all the *`<xxxx>`* inside the above command with the correct value. `team_secret` may become *x3x[..]2c*.