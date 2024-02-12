---
id: sc-hp-bsm
title: BSM
---

## Installation

### Dépendances

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS 7/Redhat 7-->

Installer le dépôt **Epel**.

```shell
yum -y install epel-release
```

Installer les dépendances.

```shell
yum install luarocks make gcc lua-curl lua-devel
```

<!-- CentOS 8 -->

Installez le paquet dnf plugins.

```shell
dnf -y install dnf-plugins-core
```

Installer le dépôt **Powertools**.

```shell
dnf config-manager --set-enabled powertools
```

Installer le dépôt **Epel**.

```shell
dnf -y install epel-release
```

Installer les dépendances.

```shell
dnf install make gcc libcurl-devel lua-devel luarocks
```

<!-- RedHat 8 -->

Installez le paquet dnf plugins.

```shell
dnf -y install dnf-plugins-core
```

Installer le dépôt **Epel**.

```shell
dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Activez le dépôt **Codeready**.

```shell
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Installer les dépendances.

```shell
dnf install make gcc libcurl-devel lua-devel luarocks
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Lua modules

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS/Redhat 7-->

Installer les modules lua de Centreon.

```shell
luarocks install centreon-stream-connectors-lib
```

<!-- CentOS/Redhat 8-->

Installer **lua-curl**.

```shell
luarocks install Lua-cURL
```

Installer les modules lua de Centreon.

```shell
luarocks install centreon-stream-connectors-lib
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Télécharger le Stream Connector BSM events

```shell
wget -O /usr/share/centreon-broker/lua/bsm-events-apiv2.lua  https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/bsm/bsm-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/bsm-events-apiv2.lua
```

## Configuration

Pour configurer votre Stream Connector, vous devez **allez** dans le menu **Configuration --> Poller --> Broker configuration**. **Sélectionner** la configuration **central-broker-master** (ou la configuration de broker appropriée s'il s'agit d'un poller ou d'un serveur distant qui enverra des événements) et **cliquer** sur l'onglet **Output** lorsque le formulaire du broker s'affiche.

**Ajouter** une nouvelle sortie **généric - stream connector** et **régler** les champs suivants comme suit :

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | BSM                                                    |
| Path            | /usr/share/centreon-broker/lua/bsm-events-apiv2.lua    |

### Ajouter les paramètres obligatoires de BSM

Chaque Stream Connector dispose d'un ensemble de paramètres obligatoires. Pour les ajouter, vous devez **cliquer** sur le bouton **+Add a new entry** situé **sous** l'entrée **filter category**.

| Type   | Name                | Value (explanation)                                                                                                    | defaultvalue                                                      |
|--------|---------------------|------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------------- |
| String | `http_server_url`   | URL of your BSM platform                                                                                             | `https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/` |

### Ajouter les paramètres optionnels de BSM

Certains Stream Connector disposent d'un ensemble de paramètres optionnels dédiés au logiciel auquel ils sont associés.  Pour les ajouter, vous devez **cliquer** sur le bouton **+Add a new entry** situé **sous** l'entrée **filter category**.

| Type   | Name                | Value (explanation)                                                                                                    | defaultvalue                                                      |
|--------|---------------------|------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------------- |
| String | `http_proxy_string` | Setting the proxy to output to the Internet in HTTP/HTTPS                                                               | `http://your.proxy.server:3128`                                   |
| String | `source_ci`         | Name to identify the sender                                                                                             | `Centreon`                                                        |
| Number | `log_level`         | Log verbosity level 0: errors only, 1: +warnings, 2: +verbose, 3: +debug                                               | 2                                                                 |
| String | `log_path`          | Full path of the log file                                                                                               | `/var/log/centreon-broker/my-custom-logfile.log`                  |
| Number | `max_buffer_size`   | Maximum number of events to be buffered while waiting to be transmitted in one transmission                             | 1                                                                 |
| Number | `max_buffer_age`    | Maximum time to wait before sending events to the buffer if `max_buffer_size` is not yet reached                       | 5                                                                 |

### Configuration du proxy

Lorsque vous utilisez un proxy pour vous connecter au système BSM, vous pouvez utiliser des paramètres supplémentaires pour le configurer :

| Type     | Name               | Value explanation                                     |
| -------- | ------------------ | ----------------------------------------------------- |
| string   | proxy_address      | Proxy address                                         |
| number   | proxy_port         | Proxy port (mandatory when proxy_address is set)      |
| string   | proxy_username     | Proxy username the file in which logs are written     |
| password | proxy_password     | Proxy password (mandatory when proxy_username is set) |

### Paramètres standard

Tous les Stream Connectors peuvent utiliser un ensemble de paramètres optionnels qui sont mis à disposition par les modules lua des Stream Connector Centreon.

Tous ces paramètres sont documentés **[ici](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**.

Certains d'entre eux sont remplacés par ce Stream Connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Regroupement d'événements

Ce Stream Connector n'est pas compatible avec le groupage d'événements. Cela signifie que l'option `max_buffer_size` ne peut pas être supérieure à 1.

## Format de l'événement

Ce Stream Connetor enverra l'évenement au format suivant.

### Service status event

```xml
{
 "<event_data>"
        "<hostname>"  Central  "</hostname>"
        "<svc_desc>"  Ping  "</svc_desc>"
        "<state>" 0 "</state>"
        "<last_update>" 1640862289  "</last_update>"
        "<output>"  OK - 10.30.2.31 rta 0.285ms lost 0%  "</output>"
        "<service_severity>" 0 "</service_severity"
        "<url>"  no url for this service  "</url>"
        "<source_host_id>"  19  "</source_host_id>"
        "<source_svc_id>"  546  "</source_svc_id>"
        "<scheduled_downtime_depth>"  0  "</scheduled_downtime_depth>"
 "</event_data>"
}
```

### Host status event

```xml
{
 "<event_data>"
      "<hostname>" Central "</hostname>"
      "<host_severity>" 0 "</host_severity>"
      "<xml_notes>" no notes found on host "</xml_notes>"
      "<url>" no action url for this host "</url>"
      "<source_ci>" Centreon "</source_ci>"
      "<source_host_id>" 0 "</source_host_id>"
      "<scheduled_downtime_depth>" 0 "</scheduled_downtime_depth>"
  "</event_data>"
}
```

### Format d'événement personnalisé

Ce Stream Connector vous permet de modifier le format de l'événement en fonction de vos besoins. Seule la partie **event** du json est personnalisable. Il vous permet également de gérer des types d'événements qui ne sont pas gérés par défaut tels que les événements **ba_status**.

Afin d'utiliser cette fonctionnalité, vous devez configurer un fichier de format d'événement json et ajouter un nouveau paramètre du Stream Connector.

| Type   | Name        | Value                                                   |
| ------ | ----------- | ------------------------------------------------------- |
| string | format_file | /etc/centreon-broker/lua-conf/bsm-events-format.json    |

> Le fichier de configuration du format des événements doit être lisible par l'utilisateur de *centreon-broker*.

Pour en savoir plus sur le format d'événement personnalisé et le fichier modèle, consultez cette **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commande curl

Voici la liste de toutes les commandes curl qui sont utilisées par le Stream Connector.

### Envoie d'évenements

```shell
curl -X POST https://centreon.bsm.server:30005/bsmc/rest/events/myCentreon/
   -H "Content-Type: application/xml"
   -H "Accept: application/xml"
   -d "<event_data><hostname>Central</hostname><svc_desc>Ping</svc_desc><state>0</state><last_update>1640862289</last_update><output>OK - 10.30.2.31 rta 0.285ms lost 0%</output><service_severity>0</service_severity><url>no url for this service</url><source_host_id>19</source_host_id><source_svc_id>546</source_svc_id><scheduled_downtime_depth>0</scheduled_downtime_depth></event_data>"
```