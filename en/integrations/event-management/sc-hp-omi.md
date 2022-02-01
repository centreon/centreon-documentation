---
id: sc-hp-omi
title: HP OMi Events
---

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **service_status** events. The event format is shown **[there](#event-format)**.
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

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

<!-- CentOS/Redhat 8-->

Install **lua-curl**.

```shell
luarocks install Lua-cURL
```

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Download OMi events stream connector

```shell
wget -O /usr/share/centreon-broker/lua/omi-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/omi/omi-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/omi-events-apiv2.lua
```

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | HP OMi events                                          |
| Path            | /usr/share/centreon-broker/lua/omi-events-apiv2.lua    |
| Filter category | Neb                                                    |

### Add OMi mandatory parameters

Each stream connector has a set of mandatory parameters. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name                | Value (explanation)                                         | defaultvalue                        |
|--------|---------------------|------------------------------------------------------------ | ----------------------------------- |
| string | `ipaddr`            | ip address of the operation connector server                | `192.168.56.15`                     |
| string | `url`               | URL of your BSM platform                                    | `/bsmc/rest/events/opscx-sdk/v1/`   |
| string | `port`              | the operation connector server port                         | 30005                               |

### Add OMi optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name                | Value (explanation)                                                                               | defaultvalue                                            |
|--------|---------------------|-------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| string | `http_proxy_string` | Setting the proxy to output to the Internet in HTTP/HTTPS                                         | `http://your.proxy.server:3128`                         |
| string | `source_ci`         | Name to identify the sender                                                                       | `Centreon`                                              |
| number | `log_level`         | Log verbosity level 0: errors only, 1: +warnings, 2: +verbose, 3: +debug                          | 2                                                       |
| string | `log_path`          | Full path of the log file                                                                         | `/var/log/centreon-broker/my-custom-logfile.log`        |

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
| string | accepted_elements   | service_status                         |

## Event bulking

This stream connector is not compatible with event bulking. Meaning that the option `max_buffer_size` can't be higher than 1

## Event format

This stream connector will send event with the following format.

### service_status event

```xml
{
    <event_data>\t
    <related_ci>test_splunk</related_ci>\t
    <source_ci>Centreon</source_ci>\t
    <title>Ping</title>\t
    <source_event_id>271</source_event_id>\t
    <severity>0</severity>\t
    <description>OK - localhost rta 0.024ms lost 0%</description>\t
    <node>test_splunk</node>\t
    <time_created>1643303907</time_created>\t
    </event_data>\t
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                                   |
| ------ | ----------- | ------------------------------------------------------- |
| string | format_file | /etc/centreon-broker/lua-conf/omi-events-format.json    |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

```shell
curl -X POST https://192.168.56.15:300005/bsmc/rest/events/opscx-sdk/v1/
   -H "Content-Type: application/xml"
   -H "Accept: application/xml"
   -d "<event_data>       <related_ci>srv-stream-connector</related_ci>    <source_ci>Centreon</source_ci> <title>Ping</title>     <source_event_id>271</source_event_id>  <severity>0</severity>  <description>OK - localhost rta 0.024ms lost 0%</description>   <node>stream-connector</node>        <time_created>1643303907</time_created> </event_data>"
```