---
id: sc-canopsis-events
title: Canopsis Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Canopsis Events stream connector allows you to send data from Centreon to Canopsis
using their HTTP REST API.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible 
to send it from a remote server or a poller (e.g. if you want to avoid the central 
server being a SPOF, or if you are an MSP and you install the stream connector on a 
poller or a remote server within your customer's infrastructure).
- By default, the Canopsis Events stream connector sends events from 
**[host_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#host-status)**, 
**[service_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#service-status)** 
and **[acknowledgement](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#acknowledgement)** 
Broker events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let 
you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-canopsis).

## Compatibility

This stream connector is designed to be compatible with Canopsis' API v.4, and more specifically the following versions of Canopsis : 22.10, 
23.04, 23.10 and 24.04.

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

You will need to configure your Canopsis host to receive data from Centreon. Refer to the 
[Canopsis user guide](https://doc.canopsis.net/guide-utilisation/menu-administration/droits/)
, in particular check if creation, reading and deletion rights are activated. See the following documentations: 
* [rights administration](https://doc.canopsis.net/guide-utilisation/menu-administration/droits/) 
* [planification administration] (https://doc.canopsis.net/guide-utilisation/menu-administration/planification/) (in case of downtimes). 
in case of downtimes). 
For the user associated to the **Authentication key** you must modify the rights matrix on the Canopsis **Administration > Rights** page, **API** tab, **PBehavior** section.
Select **create**, **read** and **delete** in the following subsections:
**PBehaviors**, **Behaviors Reason** and **PBehaviors Types**.

Make sure Canopsis is able to receive data sent by Centreon: flows must not be blocked 
by Canopsis's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is 
a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then 
click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                      |
| --------------- |------------------------------------------------------------|
| Name            | Canopsis events                                            |
| Path            | /usr/share/centreon-broker/lua/canopsis2x-events-apiv2.lua |
| Filter category | Neb                                                        |

5. To enable Centreon to connect to your Canopsis equipment, fill in the following 
mandatory parameters. The fields for the first entry are already present. Click on 
the **+Add a new entry** link located below the **Filter category** table to add 
another one.

| Type   | Name             | Value explanation                     | Value exemple |
| ------ |------------------|---------------------------------------|--------------|
| string | canopsis_authkey | The Canopsis API authentication key | `an_authkey` |
| string | canopsis_host    | Canopsis host address                 | `a host`     |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name              | Value explanation                          | default value                                      |
| ------ | ----------------- |--------------------------------------------|----------------------------------------------------|
| string | logfile           | The file in which logs are written         | /var/log/centreon-broker/canopsis-events-apiv2.log |
| number | log_level         | Logging level from 1 (errors) to 3 (debug) | 1                                                  |

7. Use the stream connector's optional parameters to [filter or adapt the data you want 
Centreon to send to Canopsis](#filtering-or-adapting-the-data-you-want-to-send-to-canopsis).
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
you want to only send to Canopsis the events linked to a hostgroup called "Europe", enter:

   ```text
   type = string
   name = accepted_hostgroup
   value = Europe
   ```

* For the Canopsis Events stream connector, the following values always override the 
default values, you do not need to define them in the interface except if you want to 
change their values (for example to add the downtimes in the **accepted_elements** variable).

| Type   | Name                             | Default value for the stream connector      |
| ------ |----------------------------------|---------------------------------------------|
| string | accepted_categories              | neb                                         |
| string | accepted_elements                | host_status,service_status,acknowledgement  |
| string | canopsis_downtime_comment_route  | /api/v4/pbehavior-comments                  |
| string | canopsis_downtime_reason_name    | Centreon_downtime                           |
| string | canopsis_downtime_reason_route   | /api/v4/pbehavior-reasons                   |
| string | canopsis_downtime_route          | /api/v4/pbehaviors                          |
| number | canopsis_downtime_send_pbh       | 1                                           |
| string | canopsis_downtime_type_name      | Default maintenance                         |
| string | canopsis_downtime_type_route     | /api/v4/pbehavior-types                     |
| string | canopsis_event_route             | /api/v4/event                               |
| string | canopsis_port                    | 443                                         |
| number | canopsis_sort_list_hostgroups    | 0                                           |
| string | canopsis_sort_list_servicegroups | 0                                           |
| string | connector                        | centreon-stream                             |
| string | connector_name                   | centreon-stream-central                     |
| string | connector_name_type              | poller                                      |
| string | sending_method                   | api                                         |
| string | sending_protocol                 | https                                       |
| string | use_severity_as_state            | 0                                           |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send 
more than one event in each call to the Canopsis REST API.

To use this feature you must add the following parameter in your stream connector 
configuration.

| Type   | Name            | Value example |
| ------ | --------------- |---------------|
| number | max_buffer_size | `3`           |

In the example above, the Canopsis stream connector waits until there are 4 events to send them all.

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
      "long_output":"Plugin's long output",
      "resource":"Service-name",
      "output":"Plugin's output",
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
      "event_type":"ack",
      "component":"Host-1",
      "connector":"centreon-stream",
      "author":"admin",
      "state":1,
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
**ba_status** events.

In order to use this feature you need to configure a json event format file and add 
a new stream connector parameter.

| Type   | Name        | Value                                           |
| ------ |-------------|-------------------------------------------------|
| string | format_file | /etc/centreon-broker/canopsis-events-format.json|

> The event format configuration file must be readable by the **centreon-broker** user.

To learn more about custom event formats and templating files, read
**[this documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

Here is the list of curl commands used by the Canopsis stream connector:

#### Request pbehavior-reasons route

This command checks that the **pbehavior-reasons** route is accessible and returns the values for the **Reason** field for the downtimes. This allows you to check that the name of the **Reason** field for Centreon downtimes exists (the default value is **Centreon_downtime**).

1. Log in to the server that you configured to send events to Canopsis (your central 
server, a remote server or a poller).
2. Run the following command (replace with you own values):

```shell
curl -X GET -H 'accept: application/json' -H 'x-canopsis-authkey: <xxxx>' 'https://demo.canopsis.net:443/api/v4/pbehavior-reasons'
```

> Replace the *`<xxxx>`* inside the above command with the correct values for authentication to the Canopsis host.

3. Check if the command returns a data structure of this form:
```json
   "data":[
      {
         "_id":"XXXX",
         "name":"NAME",
         "description":"DESCRIPTION"
      }
   ]
```

#### Request pbehavior-types route

This command checks that the **pbehavior-types** route is accessible and returns the possible IDs for the **Types** of downtimes. This allows you to check that the name of the **Type** field for Centreon downtimes exists (the default value is **Default maintenance**).

1. Log in to the server that you configured to send events to Canopsis (your central 
server, a remote server or a poller).
2. Run the following command:

```shell
curl -X GET -H 'accept: application/json' -H 'x-canopsis-authkey: <xxxx>' 'https://demo.canopsis.net:443/api/v4/pbehavior-types'
```

> Replace the *`<xxxx>`* inside the above command with the correct values for authentication to the Canopsis host.

3. Check if the command returns a data structure of this form:
```json
"data":[
      {
         "_id":"ec35c069-1651-4ee1-8944-3e5574e7b516",
         "name":"Default active",
         "description":"Default active",
         "type":"active",
         "priority":2,
         "icon_name":"",
         "color":"#2FAB63"
      },
      {
         "_id":"470c469c-77bc-402c-910f-30a8b2584343",
         "name":"Default inactive",
         "description":"Default inactive",
         "type":"inactive",
         "priority":1,
         "icon_name":"brightness_3",
         "color":"#979797"
      },
      {
         "_id":"5ea9d2d8-0f16-4e19-bcca-64b1e96e00fa",
         "name":"Default maintenance",
         "description":"Default maintenance",
         "type":"maintenance",
         "priority":3,
         "icon_name":"build",
         "color":"#BF360C"
      },
      {
         "_id":"1fb65097-ddaa-4e99-9239-8263095c156c",
         "name":"Default pause",
         "description":"Default pause",
         "type":"pause",
         "priority":4,
         "icon_name":"pause",
         "color":"#5A6D80"
      }
   ]
```
> With the default values of the Canopsis connector, downtimes have the "Default maintenance" type.

#### Request app-info route

This command verifies that the **app-info** route is accessible and returns the Canopsis host information.

1. Log in to the server that you configured to send events to Canopsis (your central 
server, a remote server or a poller).
2. Run the following command:

```shell
curl -X GET -H 'accept: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port>/api/v4/app-info'
```

> Replace all the *`<xxxx>`* inside the above command with the correct values for authentication to the Canopsis host.
> For canopsis_port, the default value defined in the connector is canopsis_port:443.

3. This command only allows access to the Canopsis version so no need to inspect all the returned content of it.

### Sending events

If you want to test that events are sent to Canopsis correctly:

1. Log in to the server that you configured to send events to Canopsis (your central 
server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H 'content-length: 400' -H 'content-type: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port><canopsis_event_route>' -d '[{"hostgroups":[],"component":"Test-Canopsis","host_id":"8","event_type":"check","resource":"passif","output":"Test_passif_output","servicegroups":[],"connector":"centreon-stream","source_type":"resource","action_url":"","long_output":"Test-curl-command Passif long output","notes_url":"","connector_name":"Central","timestamp":1710843117,"service_id":"10","state":1}]'
```

> Replace all the *`<xxxx>`* inside the above command with the correct values for authentication to the Canopsis host. 
> Default values defined in the connector are canopsis_port:443 and canopsis_event_route:/api/v4/event.

3. Check that the event has been received by Canopsis. The status should appear in the **Alarms > In progress** page of Canopsis.

![image](../../assets/integrations/data-analytics/status.png)

### Sending downtimes

If you want to test that downtimes are sent to Canopsis correctly:

1. Log in to the server that you configured to send events to Canopsis (your central 
server, a remote server or a poller).
2. Run the following command:

```shell
curl -X POST -H 'content-length: 400' -H 'content-type: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port><canopsis_pbehaviors>' -d '{"tstart":1713959323,"enabled":true,"type":"5ea9d2d8-0f16-4e19-bcca-64b1e96e00fa","tstop":1713960043,"author":"admin","entity_pattern":[[{"field":"name","cond":{"value":"Test-Service-Demo-Canopsis/Test-Demo-Canopsis","type":"eq"}}]],"rrule":"","reason":"3010f2a3-f43c-421a-8c7c-e70522f0c862","name":"centreon-downtime-1-1713959345","_id":"centreon-downtime-1-1713959345"}'
```

> Replace all the *`<xxxx>`* inside the above command with the correct values for authentication to the Canopsis host. 
> Default values defined in the connector are canopsis_port:443 and canopsis_pbehaviors:/api/v4/pbehaviors.

3. Check that the event has been received by Canopsis: the downtimes should appear in the **Administration > Tags gestion** page of Canopsis.