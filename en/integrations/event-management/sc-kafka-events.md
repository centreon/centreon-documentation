---
id: sc-kafka-events
title: Kafka Event Manager 
---

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **host_status**, **service_status** and **ba_status** events. The event format is shown **[there](#event-format)**.
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
yum install luarocks make git gcc lua-devel librdkafka
```

Install **luaffi**.

```shell
luarocks install --server=https://luarocks.org/dev luaffi
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
dnf install make gcc luarocks meson gcc-c++ cmake libffi-devel lua-devel libffi
```

Install **c-ffi**.

```shell
luarocks install cffi-lua
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
dnf install make gcc luarocks meson gcc-c++ cmake libffi-devel lua-devel libffi
```

Install **c-ffi**.

```shell
luarocks install cffi-lua
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Lua modules

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

### Download Kafka events stream connector

```shell
wget -O /usr/share/centreon-broker/lua/kafka-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/kafka/kafka-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/kafka-events-apiv2.lua
```

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                 |
| --------------- | ----------------------------------------------------- |
| Name            | Kafka events                                          |
| Path            | /usr/share/centreon-broker/lua/kafka-events-apiv2.lua |
| Filter category | Neb,Bam                                               |

### Add Kafka mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name    | Value explanation                                             | Value exemple                               |
| ------ | ------- | ------------------------------------------------------------- | ------------------------------------------- |
| string | topic   | the topic in which events are going to be written             | Monitoring                                  |
| string | brokers | Coma separeted list of brokers that are ready to receive data | broker_address1:port1,broker_address2:port2 |

### Add Kafka optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name      | Value explanation                          | default value                                       |
| ------ | --------- | ------------------------------------------ | --------------------------------------------------- |
| string | logfile   | the file in which logs are written         | /var/log/centreon-broker/kafka-stream-connector.log |
| number | log_level | logging level from 1 (errors) to 3 (debug) | 1                                                   |

### Standard parameters

All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules.

All those parameters are documented **[here](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**.

Some of them are overridden by this stream connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

### Librdkafka (library dependency) parameters

In addition to parameters from stream connectors, there is a handfull of parameters available thanks to the librdkafka library. They are all documented in the librdkafka **[official documentation](https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md)**. To use them you just need to **add** the **_sc_kafka_ prefix**.

With that in mind, the parameter **sasl.mechanism** becomes **_sc_kafka_sasl.mechanism** in your broker configuration.

> El7 and El8 repos grant access to an old librdkafka library version.

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to kafka brokers.

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

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **acknowledgement events**.

In order to use this feature you need to **configure** a json event format file and **add** a new stream connector parameter.

| Type   | Name        | Value                                         |
| ------ | ----------- | --------------------------------------------- |
| string | format_file | /etc/centreon-broker/kafka-events-format.json |

> The event format configuration file must be readable by the centreon-broker user.

To learn more about custom event format and templating file, **head over** the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Test connexion

Sending data to Kafka can be quite complicated because of all the involved parameters (either from the stream connector itself or the kafka library).

To make things easier, a lua connection test script is available.

To install it you must follow the **[installation procdure](#installation)** and then:

```shell
wget -O /tmp/kafka_test_connection.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/modules/tests/kafka_test_connexion.lua 
```

**Open** the script and **configure** the kafka options that you want to use from the librdkafka **[official documentation](https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md)**  (you do not need to add the *_sc_kafka_* prefix this time, just put the parameter inside the **config[]** brackets).

There are already configuration set up as examples to guide you.

If it doesn't work, you should have an error message like below (with the appropriate error message). It is strongly advised to have access to kafka to check if a message is sent from the test script.

```shell
%3|1622459610.760|FAIL|rdkafka#producer-1| [thrd:sasl_plaintext://cps-kafkan:9093/bootstrap]: sasl_plaintext://cps-kafkan:9093/bootstrap: Failed to resolve 'cps-kafkan:9093': Name or service not known
```
