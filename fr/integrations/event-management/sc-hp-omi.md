---
id: sc-hp-omi
title: HP OMi Events
---

## Avant de commencer

- Vous avez la possibilité d'envoyer des événements depuis un serveur central, un serveur distant ou un poller.
- Par défaut, ce *Stream Connector* envoie des événements **service_status**. Le format de l'événement est indiqué **[ici](#event-format)**.
- Les événements susmentionnés sont déclenchés chaque fois qu'un hôte ou un service est contrôlé. Divers paramètres vous permettent de filtrer les événements.

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

### Télécharger le Stream Connector OMi events

```shell
wget -O /usr/share/centreon-broker/lua/omi-events-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/centreon-certified/omi/omi-events-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/omi-events-apiv2.lua
```

## Configuration

Pour configurer votre Stream Connector, vous devez **allez** dans le menu **Configuration --> Poller --> Broker configuration**. **Sélectionner** la configuration **central-broker-master** (ou la configuration de broker appropriée s'il s'agit d'un poller ou d'un serveur distant qui enverra des événements) et **cliquer** sur l'onglet **Output** lorsque le formulaire du broker s'affiche.

**Ajouter** une nouvelle sortie **généric - stream connector** et **régler** les champs suivants comme suit :

| Field           | Value                                                  |
| --------------- | ------------------------------------------------------ |
| Name            | HP OMi events                                          |
| Path            | /usr/share/centreon-broker/lua/omi-events-apiv2.lua    |
| Filter category | Neb                                                    |

### Ajouter les paramètres obligatoires d'OMi

Chaque Stream Connector dispose d'un ensemble de paramètres obligatoires. Pour les ajouter, vous devez **cliquer** sur le bouton **+Add a new entry** situé **sous** l'entrée **filter category**.

| Type   | Name                | Value (explanation)                                         | defaultvalue                        |
|--------|---------------------|------------------------------------------------------------ | ----------------------------------- |
| string | `ipaddr`            | IP address of the operation connector server                | `192.168.56.15`                     |
| string | `url`               | URL of your BSM platform                                    | `/bsmc/rest/events/opscx-sdk/v1/`   |
| string | `port`              | the operation connector server port                         | 30005                               |

### Ajouter les paramètres optionnels d'OMi

Certains connecteurs de flux disposent d'un ensemble de paramètres optionnels dédiés au logiciel auquel ils sont associés.  Pour les ajouter, vous devez **cliquer** sur le bouton **+Add a new entry** situé **sous** l'entrée **filter category**.

| Type   | Name                | Value (explanation)                                                                               | defaultvalue                                            |
|--------|---------------------|-------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| string | `http_proxy_string` | Setting the proxy to output to the Internet in HTTP/HTTPS                                         | `http://your.proxy.server:3128`                         |
| string | `source_ci`         | Name to identify the sender                                                                       | `Centreon`                                              |
| number | `log_level`         | Log verbosity level 0: errors only, 1: +warnings, 2: +verbose, 3: +debug                          | 2                                                       |
| string | `log_path`          | Full path of the log file                                                                         | `/var/log/centreon-broker/my-custom-logfile.log`        |

### Configuration du proxy

Lorsque vous utilisez un proxy pour vous connecter au système HP OMi, vous pouvez utiliser des paramètres supplémentaires pour le configurer :

| Type     | Name               | Value explanation                                     |
| -------- | ------------------ | ----------------------------------------------------- |
| string   | proxy_address      | Proxy address                                         |
| number   | proxy_port         | Proxy port (mandatory when proxy_address is set)      |
| string   | proxy_username     | Proxy username the file in which logs are written     |
| password | proxy_password     | Proxy password (mandatory when proxy_username is set) |

### Paramètres standard

Tous les Stream Connectors peuvent utiliser un ensemble de paramètres optionnels qui sont mis à disposition par les modules lua des connecteurs de flux Centreon.

Tous ces paramètres sont documentés **[ici](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters)**.

Certains d'entre eux sont remplacés par ce Stream Connector.

| Type   | Name                | Default value for the stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | service_status                         |

## Regroupement d'événements

Ce connecteur de flux n'est pas compatible avec le groupage d'événements. Cela signifie que l'option `max_buffer_size` ne peut pas être supérieure à 1.

## Format de l'événement

Ce Stream Connetor enverra l'évenement au format suivant.

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

### Format d'événement personnalisé

Ce Stream Connector vous permet de modifier le format de l'événement en fonction de vos besoins. Seule la partie **event** du json est personnalisable. Il vous permet également de gérer des types d'événements qui ne sont pas gérés par défaut tels que les événements **ba_status**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                                   |
| ------ | ----------- | ------------------------------------------------------- |
| string | format_file | /etc/centreon-broker/lua-conf/omi-events-format.json    |

> Le fichier de configuration du format des événements doit être lisible par l'utilisateur de *centreon-broker*.

Pour en savoir plus sur le format d'événement personnalisé et le fichier modèle, consultez cette **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commande curl

Voici la liste de toutes les commandes curl qui sont utilisées par le Stream Connector.

### Envoie d'évenements

```shell
curl -X POST https://192.168.56.15:300005/bsmc/rest/events/opscx-sdk/v1/
   -H "Content-Type: application/xml"
   -H "Accept: application/xml"
   -d "<event_data>       <related_ci>srv-stream-connector</related_ci>    <source_ci>Centreon</source_ci> <title>Ping</title>     <source_event_id>271</source_event_id>  <severity>0</severity>  <description>OK - localhost rta 0.024ms lost 0%</description>   <node>stream-connector</node>        <time_created>1643303907</time_created> </event_data>"
```