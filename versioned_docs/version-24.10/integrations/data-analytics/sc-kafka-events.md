---
id: sc-kafka-events
title: Kafka Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Kafka Events stream connector allows you to send data from Centreon to Kafka instances.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible to send it from a remote server or a poller 
(e.g. if you want to avoid the central server being a SPOF, or if you are an MSP and you install the stream connector on a poller 
or a remote server within your customer's infrastructure).
- By default, the Kafka Events stream connector sends data from [**host_status**](../../developer/developer-broker-mapping.md#host-status), 
[**service_status**](../../developer/developer-broker-mapping.md#service-status) and [**ba_status**](../../developer/developer-broker-mapping.md#ba-status-event) 
Broker events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-kafka).

## Installation

Perform the installation on the server that will send data to Kafka (central server, remote server, poller).

1. Login as `root` using your favorite SSH client.

2. Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-kafka
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-kafka
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-kafka
```

</TabItem>
</Tabs>

## Configuring your Kafka server

You may need to configure your Kafka server so that it can receive data from Centreon. Please refer to Kafka's documentation.
Make sure Kafka is able to receive data sent by Centreon: flows must not be blocked by Kafka's configuration or by a security device.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                 |
| --------------- |-------------------------------------------------------|
| Name            | Kafka events                                          |
| Path            | /usr/share/centreon-broker/lua/kafka-events-apiv2.lua |
| Filter category | Neb,Bam                                               |

5. To enable Centreon to connect to your Kafka device, fill in the following mandatory parameters. The fields for 
the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name    | Value explanation                                             | Value exemple                               |
| ------ | ------- |---------------------------------------------------------------|---------------------------------------------|
| string | topic   | The topic in which events are going to be written             | Monitoring                                  |
| string | brokers | Comma-separated list of brokers that are ready to receive data | broker_address1:port1,broker_address2:port2 |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name      | Value explanation                          | Default value                             |
| ------ |-----------|--------------------------------------------|-------------------------------------------|
| string | logfile   | The file in which logs are written         | /var/log/centreon-broker/kafka-events.log |
| number | log_level | Logging level from 1 (errors) to 3 (debug) | 1                                         |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Kafka](#filtering-or-adapting-the-data-you-want-to-send-to-kafka).

In addition to parameters from stream connectors, there is a handful of parameters available thanks to the librdkafka library. 
They are all documented in the librdkafka **[official documentation](https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md)**. 
To use them you just need to **add** the **_sc_kafka_ prefix**.

With that in mind, the **sasl.mechanism** parameter becomes **_sc_kafka_sasl.mechanism** in your broker configuration.


8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

Kafka should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Kafka

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Kafka device, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Kafka the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Kafka Events stream connector, the following values always override the default values, you do not need to define them in the interface.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ |---------------------|----------------------------------------|
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Kafka REST API.

To use this feature you must add the following parameter in your stream connector configuration.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send event with the following format.

### service_status event

```json
{
  "host": "my_host",
  "service": "my_service",
  "output": "CRITICAL: the wind broke my umbrella",
  "state": "CRITICAL"
}
```

### host_status event

```json
{
  "host": "my_host",
  "output": "DOWN: putting gas in my eletric car was not a good idea",
  "state": "DOWN"
}
```

### ba_status event

```json
{
  "ba": "my_ba",
  "state": "CRITICAL"
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. 
It also allows you to handle event types that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                         |
| ------ | ----------- |-----------------------------------------------|
| string | format_file | /etc/centreon-broker/kafka-events-format.json |

> The event format configuration file must be readable by the **centreon-broker** user.

To learn more about custom event formats and templating files, visit **[this page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

Sending data to Kafka can be quite complicated because of all the involved parameters (either from the stream connector itself or the Kafka library).

To make things easier, a lua connection test script is available.

To install it you must follow the **[installation procdure](#installation)** and then:

```shell
wget -O /tmp/kafka_test_connection.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/modules/tests/kafka_test_connexion.lua 
```

**Open** the script and **configure** the kafka options that you want to use from the librdkafka **[official documentation](https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md)**  (you do not need to add the *_sc_kafka_* prefix this time, just put the parameter inside the **config[]** brackets).

There are already configuration set up as examples to guide you.

If it doesn't work, you should have an error message like below (with the appropriate error message). 
It is strongly advised to have access to Kafka to check if a message is sent from the test script.

```shell
%3|1622459610.760|FAIL|rdkafka#producer-1| [thrd:sasl_plaintext://cps-kafkan:9093/bootstrap]: sasl_plaintext://cps-kafkan:9093/bootstrap: Failed to resolve 'cps-kafkan:9093': Name or service not known
```
