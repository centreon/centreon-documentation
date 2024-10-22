---
id: sc-opsgenie-events
title: Opsgenie Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Opsgenie Events stream connector allows you to send data from Centreon to Opsgenie
using their HTTP REST API.

## Before starting

- In most cases, you will want to send data from the central server. It is also possible 
to send it from a remote server or a poller (e.g. if you want to avoid the central 
server being a SPOF, or if you are an MSP and you install the stream connector on a 
poller or a remote server within your customer's infrastructure).
- By default, the Opsgenie Events stream connector sends events from 
**[host_status](https://docs.centreon.com/docs/developer/developer-broker-mapping/#host-status)** and 
**[service_status](https://docs.centreon.com/docs/developer/developer-broker-mapping/#service-status)**.
Broker events. The event format is shown **[here](#event-format)**.
- These events are sent each time a host or a service is checked. Various parameters let 
you [filter out events](#filtering-or-adapting-the-data-you-want-to-send-to-opsgenie).

## Compatibility

> Warning, this documentation was written in February 2021, it is possible that certain elements described below became obsoletes due to changes on Opsgenie.
You can let us know by using the documentation feedback tools at the bottom right of this page.

## Installation

Perform the installation on the server that will send data to Opsgenie (central server, 
remote server, poller).

1. Login as `root` on the Centreon central server using your favorite SSH client.

2. Run the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-opsgenie
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-opsgenie
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-opsgenie
```

</TabItem>
</Tabs>

## Configuring Opsgenie

You will need to configure your Opsgenie instance to receive data from Centreon. Opsgenie integration 
requires two different API key. The first one is an integration API key coming from the **Rest API HTTPS over JSON**
integration. This integration must have the **Create and Update Access**. The second access is an 
API key coming from the **APP Settings**. This key must have the **Create and Update** access right.

### Opsgenie integration: alerts

1. From the **Settings** menu, select **Integration list**.
2. In the integration list, add an **API** integration (Rest API HTTPS over JSON).
3. Head over the **Configured integrations** menu and edit your **API** integration to enable 
it if it is not. You also must to give it a **Create and Update Access**. Save your configuration 
and the **API Key** that is mandatory to send alerts from Centreon to Opsgenie. This **API key** 
is referred as **integration_api_token** in the Centreon configuration.

### Opsgenie integration: incidents

1. Before starting, this integration will only work if you are using the Centreon BAM module.
2. From the **Settings** menu, select **API key management** in the subcategory **APP SETTINGS**.
3. In the **API key management** menu, add a new API key with **Create and Update** access
4. Save your configuration and your **Api key** that is mandatory to send incidents from Centreon 
to Opsgenie. This **API key** is referred as **app_api_token** in the Centreon configuration.

## Configuring the stream connector in Centreon

1. On your central server, go to **Configuration > Pollers > Broker configuration**.
2. Click on **central-broker-master** (or the appropriate broker configuration if it is 
a poller or a remote server that will send events).
3. On the **Output** tab, select **Generic - Stream connector** from the list and then 
click **Add**. A new output appears in the list.
4. Fill in the fields as follows:

| Field           | Value                                                    |
|-----------------|----------------------------------------------------------|
| Name            | Opsgenie events                                          |
| Path            | /usr/share/centreon-broker/lua/opsgenie-events-apiv2.lua |
| Filter category | Neb                                                      |

5. To enable Centreon to connect to your Opsgenie equipment, fill in the following 
mandatory parameters. The fields for the first entry are already present. Click on 
the **+Add a new entry** link located below the **Filter category** table to add 
another one.

| Type   | Name                  | Description                                                                          | Example of value |
| ------ |-----------------------|--------------------------------------------------------------------------------------|------------------|
| string | app_api_token         | Clé d'authentification à l'API pour les alertes                                      | `an_authkey`     |
| string | integration_api_token | Clé d'authentification à l'API pour les incidents (nécessite le module Centreon BAM) | `an_authkey`     |

6. Fill in any optional parameters you want (using the **+Add a new entry** link):

| Type   | Name      | Description                                               | Default value                                      |
|--------|-----------|-----------------------------------------------------------|----------------------------------------------------|
| string | logfile   | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/opsgenie-events-apiv2.log |
| number | log_level | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                                  |

7. Use the stream connector's optional parameters to [filter or adapt the data you want 
Centreon to send to Opsgenie](#filtering-or-adapting-the-data-you-want-to-send-to-opsgenie).
8. [Deploy the configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).
9. Restart **centengine** on all pollers:

   ```shell
   systemctl restart centengine
   ```

   Opsgenie should now receive data from Centreon.


### Filtering or adapting the data you want to send to Opsgenie

All stream connectors have a set of [optional parameters](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)
, that allow you to filter the data you will send to your Opsgenie equipment, to reformat 
the data, to define a proxy...

Each optional parameter has a default value, that is indicated in the corresponding 
documentation.

* To override the default value of a parameter, click on the **+Add a new entry** link 
located below the **Filter category** table to add a custom parameter. For example, if 
you want to only send to Opsgenie the events linked to a hostgroup called "Europe", enter:

   ```text
   type = string
   name = accepted_hostgroup
   value = Europe
   ```

* For the Opsgenie Events stream connector, the following values always override the 
default values, you do not need to define them in the interface except if you want to 
change their values (for example to remove the downtimes in the **accepted_elements** variable).

| Type   | Name                        | Value explanation                                                                                                                                                                 | Default value for the stream connector              | Possible values                                              |
|--------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------|
| string | accepted_categories         | Each event is linked to a broker category, which can be used to filter events                                                                                                     | neb                                                 | neb ou bam                          |
| string | accepted_elements           | Centreon item managed by this connector (to add more, you need to look at the custom event format section, see below), the list of items to be separated by commas without spaces | host_status,service_status                          | host_status ou service_status ou ba |
| string | api_url                     | Opsgenie API address, use https://api.eu.opsgenie.com if your instance is in Europe                                                                                               | https://api.opsgenie.com                            | -                                   |
| string | alerts_api_endpoint         | Opsgenie API address for alerts                                                                                                                                                   | /v2/alerts                                          | -                                   |
| string | incident_api_endpoint       | Opsgenie API address for incidents                                                                                                                                                | /v1/incidents/create                                | -                                   |
| string | ba_incident_tags            | List of tags for an incident. Must use comma as separator. BV names will be automatically added to the tags                                                                       | centreon,application                                | -                                   |
| number | enable_incident_tags        | Adds tags for incidents if set to ` 1`                                                                                                                                            | 1                                                   | 1 ou 0                              |
| number | get_bv                      | Adds BV name to tags if `enable_incident_tags` is set to `1`                                                                                                                      | 1                                                   | 1 ou 0                              |
| string | enable_severity             | If set to 1, tries to link a Centreon severity to an Opsgenie priority                                                                                                            | 0                                                   | 1 ou 0                              |
| string | default_priority            |                                                                                                                                                                                   |                                                     |                                     |
| string | priority_mapping            | Allows to match Opsgenie priorities with a priority order in the stream connector                                                                                                 | P1=1,P2=2,P3=3,P4=4,P5=5                            | -                                   |
| string | opsgenie_priorities         | List of Opsgenie priorities with comma separator                                                                                                                                  | P1,P2,P3,P4,P5                                      | -                                   |
| string | timestamp_conversion_format | Indicates timestamp display format                                                                                                                                                | %Y-%m-%d %H:%M:%S                                   | -                                   |

## Event bulking

This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the EOpsgenie REST API.

To use this feature you must add the following parameter in the configuration of your stream connector.

| Type    | Name            | Value     |
|---------|-----------------|-----------|
| number  | max_buffer_size | 1 ou plus |

## Event format

This stream connector will send events with the following format.

### Output example for service_status events

```json
{
	"alias": "Host-Name_Service-Name_WARNING",
	"description": "Output returned from plugin",
	"message": "2024-10-21 11:29:41 Host-Name // Service-Name is WARNING"
}
```

### Output example for host_status events

```json
{
	"alias": "Host-Name_DOWN",
	"description": "Output returned from host check",
	"message": "2024-10-21 11:32:42 Host-Name is DOWN"
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. 
It allows you to handle event types that are not handled by default such as 
**downtimes** events.

In order to use this feature you need to configure a json event format file and add 
a new stream connector parameter.

| Type   | Name        | Value                                           |
| ------ |-------------|-------------------------------------------------|
| string | format_file | /etc/centreon-broker/opsgenie-events-format.json|

> The event format configuration file must be readable by the **centreon-broker** user.

To learn more about custom event formats and templating files, read
**[this documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands: testing the stream connector

### Sending events

If you want to test that events are sent to Opsgenie correctly:

1. Log in to the server that you configured to send events to Opsgenie (your central server, a remote server or a poller). 
2. Run the following command:

```shell
curl -X POST -H 'content-type: application/json' -H 'Authorization: GenieKey <app_api_token>' 'https://api.opsgenie.com/v2/alerts' -d '{"description":"Output returned from plugin","message":"2024-10-21 11:46:37 Host-Name // Service-Name is WARNING","alias":"Host-Name_Service-Name_WARNING"}'
```

> Replace all the ** \<xxxx\>** inside the above command with the appropriate value.


3. Check that the data has been received by Opsgenie.