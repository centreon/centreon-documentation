---
id: sc-elastic-events
title: Elastic Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Elastic Events stream connector allows you to send data from Centreon to Elasticsearch. It sends data using the Elasticsearch APIs.

Use the Elastic Events stream connector if you want to retrieve all the data for the events. If you want to retrieve only metrics, use the Elastic Metrics stream connector.

An appropriate index template is created automatically by the stream connector so that your data is indexed properly in Elasticsearch. (The index template is the description of the format of the data that will be sent.)

## Installation

Perform the installation as `root` on the server that will send data to Elasticsearch (central server, remote server, poller).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-elasticsearch
```

</TabItem>
</Tabs>

## Configuring your Elasticsearch server

You may need to configure your Elasticsearch server so that it can receive data from Centreon. Please refer to Elasticsearch's documentation. Make sure Elasticsearch is able to receive data sent by Centreon: flows must not be blocked by Elasticsearch's configuration or by a security equipment.

On your Elasticsearch server, you will need:

- An index to store events sent by Centreon. You can create a *centreon_status* index with the following command:

    ```shell
    curl --user elastic:centreon-es-passwd -X PUT "<elastic_proto>://<elastic_ip>:<elastic_port>/centreon_status" -H 'Content-Type: application/json' \
    -d '{"mappings":{"properties":{"host":{"type":"keyword"},"service":{"type":"keyword"}, "output":{"type":"text"},"status":{"type":"keyword"},"state":{"type":"keyword"}, "type":{"type":"keyword"},"timestamp":{"type":"date","format":"epoch_second"}}}}'
    ```

   > If you use a custom **[event format](#event-format)**, you will have to modify the index creation accordingly.

- A user / password with required privileges to POST data to the index.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Elastic events                                          |
| Path            | /usr/share/centreon-broker/lua/elastic-events-apiv2.lua |
| Filter category | Neb                                                     |

5. To enable Centreon to connect to your Elasticsearch server, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name                    | Value explanation                       | Value exemple                                           |
| ------ | ----------------------- | --------------------------------------- | ------------------------------------------------------- |
| string | elastic_url             | The url of the Elastic stack            | `https://elastic-fqdn:9200/`                            |
| string | elastic_index_status    | Elastic target index name               | `centreon_status`                                       |
| string | elastic_username        | Elastic username                        | `a_username`                                            |
| string | elastic_password        | Elastic password                        | `a password`                                            |

6. Fill in any optional parameters you want (using the **+Add a new entry** link).

| Type   | Name              | Value explanation                                               | default value                                     |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| string | logfile           | the file in which logs are written                              | /var/log/centreon-broker/elastic-events-apiv2.log |
| number | log_level         | logging level from 1 (errors) to 3 (debug)                      | 1                                                 |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Elasticsearch](#filtering-or-adapting-the-data-you-want-to-send-to-elasticsearch).

8. [Deploy the configuration](https://docs.centreon.com/docs/monitoring/monitoring-servers/deploying-a-configuration/).

9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Elasticsearch should now receive data from Centreon. To test if it is working, see [Curl commands: testing the stream connector](#curl-commands-testing-the-stream-connector).

### Filtering or adapting the data you want to send to Elasticsearch

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters), that allow you to filter the data you will send to your Elasticsearch server, to reformat the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link located below the **Filter category** table to add a custom parameter. For example, if you want to only send to Elasticsearch the events handled by a poller named "poller-1", enter:

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* For the Elasticsearch Events stream connector, the following values always override the default values, you do not need to define them in the interface.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Elastic REST API.

To use this feature you must add the following parameter in the configuration of your stream connector.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Event format

This stream connector will send events with the following format.

### service_status event

```json
{
    "event_type": "host",
    "status": "CRITICAL",
    "state": "2",
    "state_type": 1,
    "host": "my_host",
    "service": "a_service",
    "output": "CRITICAL: Burnin and Lootin"
}
```

### host_status event

```json
{
    "event_type": "host",
    "status": "DOWN",
    "state": "1",
    "state_type": 1,
    "host": "my_host",
    "output": "CRITICAL: No woman no cry",
    "timestamp": 1637229207
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customizable. It also allows you to handle event types that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                          |
| ------ | ----------- | ---------------------------------------------- |
| string | format_file | /etc/centreon-broker/elastic-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event formats and templating files, read this **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to Elasticsearch correctly:

1. Log in to the server that you configured to send events to Elasticsearch (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -u elastic:centreon-es-passwd --header 'content-type: application/json'  -X POST "<elastic_url>/_bulk" --data-binary '{"index":{"_index":"<elastic_index_status>"}}
{"host":"jamaica","status":"OK","state_type":1,"state":0,"timestamp":<a_recent_timestamp>,"event_type":"service","service":"kingston","output":"OK: Everything is gonna be alright"}
'
```

> Replace all the *`<xxxx>`* inside the above command with the appropriate value.

3. Check that the data has been received by Elasticsearch.
