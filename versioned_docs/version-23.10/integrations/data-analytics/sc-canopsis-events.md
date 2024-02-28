---
id: sc-canopsis-events
title: Canopsis Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Canopsis Events stream connector allows you to send data from Centreon to Canopsis
using HTTP REST API.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible 
to send it from a remote server or a poller (e.g. if you want to avoid the central 
server being a SPOF, or if you are an MSP and you install the stream connector on a 
poller or a remote server within your customer's infrastructure).
- By default, the Canopsis Events stream connector sends events from 
[**host_status**](../../developer/developer-broker-mapping.md#host-status), 
[**service_status**](../../developer/developer-broker-mapping.md#service-status) and 
[**acknowledgement**](../../developer/developer-broker-mapping.md#acknowledgement) Broker 
events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let 
you filter out events.

## Compatibility

Designed to be compatible with Canopsis (API v.4) and more specifically versions : 22.10, 
23.04, 23.10 et 24.04

## Installation

Perform the installation on the server that will send data to Canopsis (central server, 
remote server, poller).

1. Login as `root` on the Centreon central server using your favorite SSH client.

2. Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-canopsis
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-canopsis
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-canopsis
```

</TabItem>
</Tabs>

## Configuring Canopsis

You will need to configure your Canopsis to receive data from Centreon. Refer to the 
[Canopsis documentation](https://doc.canopsis.net/guide-usage/menu-administration/droits/)
, in particular check if creation, reading and deletion rights are activated. 
For the associated user at the "authKey" you must modify the "Mandatory" rights matrix:

> Go in API rights API > PBehavior > PBehaviors : 
>
> “create”, “read”, “delete” must be checked

Make sure Canospsi is able to receive data sent by Centreon: flows must not be blocked 
by Canopsis's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is 
a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then 
click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Canopsis events                                         |
| Path            | /usr/share/centreon-broker/lua/canopsis-events-apiv2.lua|
| Filter category | Neb                                                     |

5. To enable Centreon to connect to your Canopsis equipment, fill in the following 
mandatory parameters. The fields for the first entry are already present. Click on 
the **+Add a new entry** link located below the **Filter category** table to add 
another one.

| Type   | Name             | Value explanation                     | Value exemple |
| ------ |------------------|---------------------------------------|--------------|
| string | canopsis_authkey | The Canopsis API authentification key | `an_authkey` |
| string | canopsis_host    | Canopsis host address                 | `a host`     |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name              | Value explanation                          | default value                                      |
| ------ | ----------------- |--------------------------------------------|----------------------------------------------------|
| string | logfile           | The file in which logs are written         | /var/log/centreon-broker/canopsis-events-apiv2.log |
| number | log_level         | Logging level from 1 (errors) to 3 (debug) | 1                                                  |

7. Use the stream connector's optional parameters to filter or adapt the data you want 
Centreon to send to Canopsis
8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).
9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Canopsis should now receive data from Centreon.

### Filtering or adapting the data you want to send to Canopsis

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)
, that allow you to filter the data you will send to your Canopsis equipment, to reformat 
the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding 
documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link 
located below the **Filter category** table to add a custom parameter. For example, if 
you want to only send to Canopsis the events link to a hostgroup called "Europe", enter:

   ```text
   type = string
   name = accepted_hostgroup
   value = Europe
   ```

* For the Canopsis Events stream connector, the following values always override the 
default values, you do not need to define them in the interface except if you want to 
change their values (for example add the downtimes in the accepted_elements varialbe).

| Type   | Name                | Default value for the stream connector     |
| ------ | ------------------- |--------------------------------------------|
| string | accepted_categories | neb                                        |
| string | accepted_elements   | host_status,service_status,acknowledgement |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send 
more than one event in each call to the Canopsis REST API.

To use this feature you must add the following parameter in your stream connector 
configuration.

| Type   | Name            | Value example |
| ------ | --------------- |---------------|
| number | max_buffer_size | `3`           |

In this value example, the stream connector Canopsis keeps 3 events and start sending
at the fourth.

## Event format

This stream connector will send events with the following format.

### Output example for service_status event

```json
[
   {
      "notes_url":"",
      "host_id":"15",
      "event_type":"check",
      "service_id":"47",
      "timestamp":1708693347,
      "hostgroups":[
         "Group 1",
         "Group 2"
      ],
      "servicegroups":[
         
      ],
      "state":1,
      "connector":"centreon-stream",
      "action_url":"",
      "long_output":"(No output returned from plugin)",
      "resource":"Service-name",
      "output":"(No output returned from plugin)",
      "source_type":"resource",
      "component":"Host-name",
      "connector_name":"Central"
   }
]
```

### Output example for host_status event

```json
[
   {
      "event_type":"check",
      "state":0,
      "component":"Host-1",
      "timestamp":1708953238,
      "host_id":"15",
      "connector":"centreon-stream",
      "source_type":"component",
      "hostgroups":[
         "Group 1",
         "Group 2"
      ],
      "action_url":"",
      "notes_url":"",
      "long_output":"OK: Host is OK",
      "connector_name":"Central",
      "output":"OK: Host is OK"
   }
]
```

### Output example for acknowledgement event

```json
[
   {
      "event_type":"ackremove",
      "component":"Host-1",
      "connector":"centreon-stream",
      "author":"admin",
      "state":3,
      "output":"Acknowledged by admin",
      "source_type":"resource",
      "long_output":"Acknowledged by admin",
      "connector_name":"Central",
      "timestamp":1709052753,
      "resource":"passif"
   }
]
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. 
It allows you to handle events type that are not handled by default such as 
**ba_status events**.

In order to use this feature you need to configure a json event format file and add 
a new stream connector parameter.

| Type   | Name        | Value                                           |
| ------ |-------------|-------------------------------------------------|
| string | format_file | /etc/centreon-broker/canopsis-events-format.json|

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following
**[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)** dédiée.

## Curl commands: testing the stream connector

This are the curl commands list used in the stream connector Canopsis:

### Sending events

If you want to test that events are sent to Canopsis correctly:

1. Log in to the server that you configured to send events to Canopsis (your central 
server, a remote server or a poller).
2. Run the following command:

```shell
curl
```

> Replace all the *`<xxxx>`* inside the above command with the correct value. 
>For instance, *<splunk_sourcetype>* may become *_json*.

3. Check that the event has been received by Canopsis .
