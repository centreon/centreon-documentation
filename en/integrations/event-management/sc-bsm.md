---
id: sc-hp-bsm
title: BSM
---

> Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on [slack](https://centreon.slack.com).

## Before starting

- You can send events from a central server, a remote server or a poller.
- By default, this stream connector sends **host_status** and **service_status** events. The event format is shown **[there](#event-format)**.
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

Install **luaxml**.

```shell
luarocks install luaxml
```

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

<!-- CentOS/Redhat 8-->

Install **lua-curl**.

```shell
luarocks install Lua-cURL
```

Install **luaxml**.

```shell
luarocks install luaxml
```

Install Centreon lua modules.

```shell
luarocks install centreon-stream-connectors-lib
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Download BSM stream connector

```shell
wget -O /usr/share/centreon-broker/lua/bsm_connector-apiv2.lua  https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/bsm/bsm_connector-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/bsm_connector-apiv2.lua
```

## Configuration

To configure your stream connector, you must **head over** the **Configuration --> Poller --> Broker configuration** menu. **Select** the **central-broker-master** configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and **click** the **Output tab** when the broker form is displayed.

**Add** a new **generic - stream connector** output and **set** the following fields as follow:

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | BSM                                                    |
| Path            | /usr/share/centreon-broker/lua/bsm_connector-apiv2.lua |

### Add BSM optional parameters

Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must **click** on the **+Add a new entry** button located **below** the **filter category** input.

| Type   | Name                | Value (explanation)                                                                                                    | defaultvalue                                                      |
|--------|---------------------|------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------------- |
| String | `http_server_url`   | URL de votre plateforme BSM                                                                                            | `https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/` |
| String | `http_proxy_string` | Paramétrage du proxy permettant de sortir vers Internet en HTTP/HTTPS                                                  | `http://your.proxy.server:3128`                                   |
| String | `source_ci`         | Nom permettant d'identifier l'émetteur                                                                                 | `Centreon`                                                        |
| Number | `log_level`         | Niveau de verbosité des logs 0: errors seulement, 1: +warnings, 2: +verbose, 3: +debug                                 | 2                                                                 |
| String | `log_path`          | Chemin complet du fichier de log                                                                                       | `/var/log/centreon-broker/my-custom-logfile.log`                  |
| Number | `max_buffer_size`   | Nombre maximum d'événements à stocker en mémoire tampon en attendant de les transmettre en un seul envoi               | 1                                                                 |
| Number | `max_buffer_age`    | Temps d'attente maximum avant d'envoyer les événements en mémoire tampon si `max_buffer_size` n'est pas encore atteint | 5                                                                 |

### Proxy configuration

When using a proxy to connect to the BSM endpoint, you can use additional parameters to configure it:

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
| string | accepted_elements   | host_status,service_status             |

## Event bulking

This stream connector is not compatible with event bulking. Meaning that the option `max_buffer_size` can't be higher than 1

## Event format

This stream connector will send event with the following format.

### status event

```xml
{
 "<event_data>"
        "<hostname>"  hostname  "</hostname>"
        "<svc_desc>"  service_description  "</svc_desc>"
        "<state>" self.sc_event.event.state  "</state>"
        "<last_update>" self.sc_event.event.last_update  "</last_update>"
        "<output>"  string.match(e.output, "^(.*)\n")  "</output>"
        xml_service_severity
        "<url>"  xml_url  "</url>"
        "<source_host_id>"  ifnil_or_empty(self.sc_event.event.host_id, '0')  "</source_host_id>"
        "<source_svc_id>"  ifnil_or_empty(self.sc_event.event.service_id, '0')  "</source_svc_id>"
        "<scheduled_downtime_depth>"  ifnil_or_empty(self.sc_event.event.scheduled_downtime_depth, '0')  "</scheduled_downtime_depth>"
 "</event_data>"
}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                                   |
| ------ | ----------- | ------------------------------------------------------- |
| string | format_file | /etc/centreon-broker/lua-conf/bsm-events-format.json    |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Curl commands

Here is the list of all the curl commands that are used by the stream connector.

### Send events

You can trigger a signal with the following command:

```shell
curl -X POST -H 'content-type: application/xml' 'https://centreon.bsm.server:30005/bsmc/rest/events/myCentreon/' -d '{"<event_data>" "<hostname>"  'srv-vp-central01'  "</hostname>" \
        "<svc_desc>"  'Swap'  "</svc_desc>" \ 
        "<state>" 'Critical'  "</state>" \
        "<last_update>" '12/16/2021 1:14 PM'  "</last_update>" \ 
        "<output>"  'Critical: Swap Total: 1.60 GB Used: 1.51 GB (94.44%) Free: 1.25 MB (5.56%)\n'  "</output>" \
        '0' \
        "<url>"  'no action url for this host'  "</url>" \
        "<source_host_id>" '3450'  "</source_host_id>" \
        "<source_svc_id>"  '1245'  "</source_svc_id>" \
        "<scheduled_downtime_depth>"  '0'  "</scheduled_downtime_depth>" \
 "</event_data>"}'
```

You can then close this signal with the following command:

```shell
curl -X POST -H 'content-type: application/xml' 'https://centreon.bsm.server:30005/bsmc/rest/events/myCentreon/' -d '{"<event_data>" "<hostname>"  'srv-vp-central01'  "</hostname>" \
        "<svc_desc>"  'Swap'  "</svc_desc>" \
        "<state>" 'OK'  "</state>" \ 
        "<last_update>" '12/16/2021 1:45 PM'  "</last_update>" \
        "<output>"  'OK: Swap Total: 1.60 GB Used: 91.25 MB (5.56%) Free: 1.51 GB (94.44%)\n'  "</output>" \
        '0' \
        "<url>"  'no action url for this host'  "</url>" \
        "<source_host_id>" '3450'  "</source_host_id>" \
        "<source_svc_id>"  '1245'  "</source_svc_id>" \
        "<scheduled_downtime_depth>"  '0'  "</scheduled_downtime_depth>" \
 "</event_data>"}'
```
