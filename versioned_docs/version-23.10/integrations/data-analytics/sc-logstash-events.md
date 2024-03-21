---
id: sc-logstash-events
title: Logstash Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Logstash Events stream connector allows you to send data from Centreon to Logstash. The stream connector translates Centreon data into a format that is understandable by Logstash, and sends it to an HTTP input plugin in Logstash.

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller (e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller or a remote server within your customer's infrastructure).
- By default, the Logstash Metrics stream connector sends [**host_status**](../../developer/developer-broker-mapping.md#host-status) and [**service_status**](../../developer/developer-broker-mapping.md#service-status) Broker events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-logstash).

## Installation

Perform the installation on the server that will send data to Logstash (central server, remote server, poller).

1. Login as `root` on the Centreon central server using your favorite SSH client.

2. Run the following command:

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

## Configuring your Logstash equipment

You may need to configure your Logstash equipment so that it can receive data from Centreon. Please refer to Logstash's documentation. Make sure Logstash is able to receive data sent by Centreon: flows must not be blocked by Logstash's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                    |
| --------------- | -------------------------------------------------------- |
| Name            | Logstash events                                          |
| Path            | /usr/share/centreon-broker/lua/logstash-events-apiv2.lua |
| Filter category | Neb                                                      |

5. To enable Centreon to connect to your Logstash equipment, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name            | Value explanation                     | Value exemple            |
| ------ | --------------- | ------------------------------------- | ------------------------ |
| string | http_server_url | the url of the logstash http plugin   | `https:/mylogstash.test` |
| number | port            | the port of your logstash http plugin | `8443`                   |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name      | Value explanation                                                                              | default value                                |
| ------ | --------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| string | username  | the username if your are using https with basic auth for your logstash http plugin             |                                              |
| string | password  | the password of your user if you are using https with basic auth for your logstash http plugin |                                              |
| string | logfile   | the file in which logs are written                                                             | /var/log/centreon-broker/logstash-events.log |
| number | log_level | logging level from 1 (errors) to 3 (debug)                                                     | 1                                            |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Logstash](#filtering-or-adapting-the-data-you-want-to-send-to-Logstash).

8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Logstash should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Logstash

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Logstash equipment, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Logstash the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Logstash Events stream connector, the following values always override the default values, you do not need to define them in the interface.

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

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customizable. It also allows you to handle event types that are not handled by default such as **ba_status** events.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                            |
| ------ | ----------- | ------------------------------------------------ |
| string | format_file | /etc/centreon-broker/logstash-events-format.json |

> The event format configuration file must be readable by the **centreon-broker** user.

To learn more about custom event formats and templating files, read [this documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation).

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to Logstash correctly:

1. Log in to the server that you configured to send events to Logstash (your central server, a remote server or a poller).

2. Run the following command:

```shell
curl -X PUT -H "accept: application/json" curl -X PUT 'http://<logstash_address>:<logstash_port>' -d '{"event_timestamp": 1653434348,"hostname": "my-host","output": "[DOWN] server is down","state": "DOWN","title": "DOWN: my-host"}'
```

> Replace all the *`<xxxx>`* inside the above command with their appropriate value. *<logstash_port>* may become *8080*.

3. Check that the data has been received by Logstash.
