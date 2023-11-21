---
id: sc-elastic-metrics
title: Elastic Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Elasticsearch metrics stream connector allows you to send data from Centreon to Elasticsearch.
It sends metrics using the Elasticsearch APIs.

An appropriate index template is created automatically by the stream connector so that your data is indexed properly in Elasticsearch. (The index template is the description of the format of the data that will be sent.)

## Prerequisites

Some dependencies are installed by **luarocks**, which connects to `https://github.com` to retrieve them. If connecting to github is not possible, download the latest version of the Lua libraries for the stream connectors available on [this page](https://github.com/centreon/centreon-stream-connector-scripts/releases): in the archive, copy the **centreon-stream-connectors-lib** directory from the **modules** directory into your server's **/usr/share/lua/5.x/** folder (5.x is the version of Lua that is installed, e.g., 5.4).

## Installation

Perform the installation as `root` on the server that will send data to Elasticsearch (central server, remote server, poller).

1. Install dependencies:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install luarocks make gcc lua-curl lua-devel wget
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install luarocks make gcc lua-curl lua-devel wget
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install luarocks make gcc lua-curl lua-devel wget
```

</TabItem>
</Tabs>

2. Install the Centreon Lua libraries for stream connectors:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
luarocks install centreon-stream-connectors-lib
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
luarocks install centreon-stream-connectors-lib
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
luarocks install centreon-stream-connectors-lib
```

</TabItem>
</Tabs>

3. Install the stream connector:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
wget -O /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connectorscripts/develop/centreon-certified/elasticsearch/elastic-metrics-apiv2.lua
```

```shell
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
wget -O /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connectorscripts/develop/centreon-certified/elasticsearch/elastic-metrics-apiv2.lua
```

```shell
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
wget -O /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connectorscripts/develop/centreon-certified/elasticsearch/elastic-metrics-apiv2.lua
```

```shell
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

</TabItem>
</Tabs>


## Configuring your Elasticsearch server

You may need to configure your Elasticsearch server so that it can receive data from Centreon. Please refer to Elasticsearch's documentation. Make sure Elasticsearch is able to receive data sent by Centreon: flows must not be blocked by Elasticsearch's configuration or by a security equipment.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Elasticsearch metrics                                   |
| Path            | /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua |
| Filter category | Neb                                                     |

5. To enable Centreon to connect to your Elasticsearch server, fill in the following mandatory parameters. The fields for the first entry are already present. Click on the **+Add a new entry** link located below the **Filter category** table to add another one.

| Type   | Name            | Description                       | Example                                           |
| ------ | --------------- | --------------------------------------- | ------------------------------------------------------- |
| string | http_server_url | The address of your Elasticsearch server, including the protocol and port | Example: https://my_elasticsearch.local:9200 |

6. Fill in any optional parameters you want (using the **+Add a new entry** link).

| Type   | Name              | Description                                               | Default value                               |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------- |
| string | elastic_username | API account to send data to | |
| string | elastic_password | API account password | |
| string | index_name | Name of the Elasticsearch index that should be used | centreon-metrics |
| string | index_template_api_endpoint | Path to the endpoint of the Elasticsearch index template | /_index_template |
| string | index_pattern | By default this takes the name of the index and adds `*`. This is the name of the indexes
for which the index template will apply when the latter is created by the stream connector | centreon-metrics* |
| number | index_priority | Priority of the index when the index template is created by the stream connector | 200 |
| number | create_datastream_index_template | The stream connector will automatically create the index template if it does not find
it (1 = automatic creation, 0 = index template is not created) | 1 |
| number | update_datastream_index_template | The stream connector will update the index template if the latter does not correspond
to the data that will be sent. (1 = autoupdate, 0 = does not auto-update). Even if automatic updating is activated, it will only
work if the index template was created by Centreon. (The index template contains metadata that indicates this.) | 0 |
| number | add_hostgroups_dimension | Adds the host groups to the data that is sent. (1 = addition of
host groups, 0 = no host groups added) | 1 |
| number | add_poller_dimension | adds the poller to the data that is sent. (1 = addition of
poller, 0 = no poller added) | 0 |
| number | add_servicegroups_dimension | Adds the service groups to the data that is sent. (1 = addition of
service groups, 0 = no service groups added) | 0 |

7. Use the stream connector's optional parameters to [filter or adapt the data you want Centreon to send to Elasticsearch](#filtering-or-adapting-the-data-you-want-to-send-to-Elasticsearch).

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

| Type   | Name                | Description |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_pollers | Only metrics handled by the pollers listed here will be sent (separator ,) e.g.:
poller_1,poller_2                                    |
| string | accepted_hostgroups   | Only metrics relating to the host groups listed here will be sent (separator ,) e.g.:
hg_1,hg_2             |
| string | accepted_servicegroups | Only metrics relating to the service groups listed here will be sent (separator ,) e.g.:
sg_1,sg_2 |
| string | accepted_metrics | [Lua pattern](#examples-of-lua-patterns) that the metric's name must match. If the name of the metric doesn't match the pattern, the metric is not sent. Default value: .* |
| string | accepted_hosts | [Lua pattern](#examples-of-lua-patterns) that the host's name must match. If the name of the host doesn't match the pattern, no metrics attached to that host will be sent. |
| string | accepted_services | [Lua pattern](#examples-of-lua-patterns) that the service's name must match. If the name of the service doesn't match the pattern, no metrics attached to this service will be sent. |
| number | accepted_hosts_enable_split_pattern | When this option is enabled, you can filter both on a list of host names, or on a list of [lua patterns](#examples-of-lua-patterns), using the comma as a separator. Example of list: "host_1,host_2", example of lua pattern: "host_%d+,another_host". (0 = disabled, 1 = enabled. Default value: 0.) |
| number | accepted_services_enable_split_pattern |  When this option is enabled, you can filter both on a list of service names, or on a list of [lua patterns](#examples-of-lua-patterns), using the comma as a separator. Example of list: "service_1,service_2", example of lua pattern: "service_%d+,another_service" (0 = disabled, 1 = enabled. Default value: 0.) |

* For the Elasticsearch Metrics stream connector, the following values always override the default values, you do not need to define them in the interface. Apart from **max_buffer_size** which is an important parameter for performance, it's not recommended to change them.

| Type   | Name                | Description | Default value for the stream connector |
| ------ | ------------------- | ------------ | -------------------------- |
| string | accepted_elements | Do not modify this parameter | host_status,service_status |
| number | max_buffer_size | Maximum number of metrics sent in a packet to Elasticsearch | 30 |
| number | hard_only | Sends metrics for events according to whether they are in SOFT or HARD states (1 = only HARD, 0 = SOFT and HARD) | 0 |
| number | enable_host_status_dedup | Sends metrics for all host events, not just state changes (0 = all events, 1 = only state changes) | 0 |
| number | enable_service_status_dedup | sends metrics for all service events and not just state changes (0 = all events, 1 = only state changes)| 0 |

## Examples of Lua patterns

Examples of Lua patterns for the **accepted_hosts** option:

* All host names starting with "OPT":

```shell
^OPT.*
```

* All host names that do not end with a number:

```shell
.*[^0-9]$
```

* All host names that contain a `.`:

```shell
.*%..*
```

* All host names that only contain lowercase letters:

```shell
%l+
```

* All host names that do not end with a number, or that start with "OPT" (if the **accepted_hosts_enable_split_pattern** option is enabled, you can combine several filters):


```shell
^OPT.*,.*[^0-9]$
```

## Event format

Here is an example of data sent by the stream connector:

```shell
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.045,"host_name":"127.0.0.1","metric_instance":"","metric_name":"rtmin","host_groups":["HG"]}
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.045,"host_name":"127.0.0.1","metric_instance":"","metric_name":"rta","host_groups":["HG"]}
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.0,"host_name":"127.0.0.1","metric_instance":"","metric_name":"pl","host_groups":["HG"]}
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.045,"host_name":"127.0.0.1","metric_instance":"","metric_name":"rtmax","host_groups":["HG"]}
```

## Debug options

You can add the following options to your configuration to help you with debugging:

| Type   | Name                | Description | Default value for the stream connector |
| ------ | ------------------- | ------------ | -------------------------- |
| string | logfile | default log file for the stream connector (when a malfunction occurs, it's also possible to find information in /var/log/centreon-broker/central-broker-master.log) | /var/log/centreonbroker/
elastic-metrics.log |
| number | log_level | verbosity level, ranging from 1 to 3, (1 = notice and errors, 2 =
warning, notice and errors, 3 = warning, notice, errors, info, debug). It is strongly recommended not to set a value beyond 2 | 1 |
| number | log_curl_commands | displays all curl commands used by the stream connector in the log file (0 = display nothing, 1 = log the commands) | 0 |
| number | send_data_test | simulates the end-to-end operation of the stream connector but sends the data to the log file instead of Elasticsearch (0 = send to Elasticsearch, 1 = send to the log file) | 0 |

## Curl commands: testing the stream connector

### Sending metrics

If you want to test that events are sent to Elasticsearch correctly:

1. Log in to the server that you configured to send events to Elasticsearch (your central server, a remote server or a poller).
2. Run the following command:

```shell
curl -X PUT -u "<user>:<password>" -H 'Content-type: application/json'
'<protocol>://<address>:<port>/<index_name>/_bulk' -d '{"index":{}}
{"poller":"Central","metric.value":0.0,"@timestamp":1690808140,"host.groups":
["HG_1","ALL"],"host.name":"central","metric.name":"rta","metric.instance":""}
{"index":{}}
{"poller":"Central","metric.value":0.0,"@timestamp":1690808140,"host.groups":
["HG_1","ALL"],"host.name":"central","metric.name":"rtmin","metric.instance":""}
'
```
  
  > Replace all the *`<xxxx>`* inside the above command with the correct value.

3. Check that the 2 metrics have been received by Elasticsearch.

### Checking the index template

If you are not receiving the expected data, check whether your index template is correct.

```shell
curl -X GET -u "<user>:<password>" -H 'Content-type: application/json'
'<protocol>://<address>:<port>/_index_template/<index_template_name>'
```

### Creating an index template

You can create your own index template manually. Use the example below:

```shell
curl -X PUT -u "<user>:<password>" -H 'Content-type: application/json'
'<protocol>://<address>:<port>/_index_template/<index_template_name>' -d
'{"priority":200,"index_patterns":["my_index*"],"_meta":
{"created_by_centreon":true,"description":"Timeseries index template for Centreon
metrics"},"template":{"mappings":{"properties":{"service.groups":
{"type":"keyword","time_series_dimension":false},"host.name":
{"type":"keyword","time_series_dimension":true},"poller":
{"type":"keyword","time_series_dimension":true},"metric.unit":
{"type":"keyword","time_series_dimension":false},"@timestamp":
{"type":"date","format":"epoch_second"},"metric.value":
{"type":"double"},"service.description":
{"type":"keyword","time_series_dimension":true},"host.groups":
{"type":"keyword","time_series_dimension":false},"metric.subinstances":
{"type":"keyword","time_series_dimension":false},"metric.name":
{"type":"keyword","time_series_dimension":true},"metric.instance":
{"type":"keyword","time_series_dimension":true}}},"settings":
{"index.mode":"time_series","index.routing_path":
["host.name","service.description","metric.name","metric.instance","poller"]}}}'
```
