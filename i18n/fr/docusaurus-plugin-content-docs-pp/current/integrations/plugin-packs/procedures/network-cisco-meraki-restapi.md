---
id: network-cisco-meraki-restapi
title: Cisco Meraki Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco Meraki Rest API** apporte 3 modèles d'hôte :

* **Net-Cisco-Meraki-Cloudcontroller-Restapi-custom**
* **Net-Cisco-Meraki-Device-Restapi-custom**
* **Net-Cisco-Meraki-Network-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Meraki-Cloudcontroller-Restapi-custom" label="Net-Cisco-Meraki-Cloudcontroller-Restapi-custom">

| Alias        | Modèle de service                                            | Description                            |
|:-------------|:-------------------------------------------------------------|:---------------------------------------|
| Api-Requests | Net-Cisco-Meraki-Cloudcontroller-Api-Requests-Restapi-custom | Contrôle l'utilisation de l'API Meraki |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Meraki-Cloudcontroller-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Device-Restapi-custom" label="Net-Cisco-Meraki-Device-Restapi-custom">

| Alias  | Modèle de service                                      | Description                            |
|:-------|:-------------------------------------------------------|:---------------------------------------|
| Device | Net-Cisco-Meraki-Cloudcontroller-Device-Restapi-custom | Contrôle l'utilisation des équipements |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Meraki-Device-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Network-Restapi-custom" label="Net-Cisco-Meraki-Network-Restapi-custom">

| Alias   | Modèle de service                                       | Description                        |
|:--------|:--------------------------------------------------------|:-----------------------------------|
| Network | Net-Cisco-Meraki-Cloudcontroller-Network-Restapi-custom | Contrôle l'utilisation des réseaux |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Meraki-Network-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias       | Modèle de service                                           | Description                                         | Découverte |
|:------------|:------------------------------------------------------------|:----------------------------------------------------|:----------:|
| Cache       | Net-Cisco-Meraki-Cloudcontroller-Cache-Restapi-custom       | Service permettant de générer les fichiers de cache |            |
| Devices     | Net-Cisco-Meraki-Cloudcontroller-Devices-Restapi-custom     | Contrôle l'utilisation des équipements              | X          |
| Networks    | Net-Cisco-Meraki-Cloudcontroller-Networks-Restapi-custom    | Contrôle l'utilisation des réseaux                  |            |
| Vpn-Tunnels | Net-Cisco-Meraki-Cloudcontroller-Vpn-Tunnels-Restapi-custom | Contrôle l'utilisation des équipements              | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle       | Description                                  |
|:----------------------|:---------------------------------------------|
| Cisco Meraki Devices  | Discover Cisco Meraki Devices using RestAPI  |
| Cisco Meraki Networks | Discover Cisco Meraki Networks using RestAPI |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                                                   | Description |
|:------------------------------------------------------------------|:------------|
| Net-Cisco-Meraki-Cloudcontroller-Restapi-Vpn-Tunnels-Network-Name | Découvre les tunnels VPN en se basant sur les noms des réseaux |
| Net-Cisco-Meraki-RestAPI-Device                                   | Découvre les équipements et supervise le statut |
| Net-Cisco-Meraki-RestAPI-Tag                                      | Découvre les tags |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| *organizations*#organization.api.requests.200.count | count |
| *organizations*#organization.api.requests.404.count | count |
| *organizations*#organization.api.requests.429.count | count |

</TabItem>
<TabItem value="Cache" label="Cache">

Ce modèle de service ne comprend pas de métriques.

</TabItem>
<TabItem value="Device" label="Device">

| Métrique                                                       | Unité |
|:---------------------------------------------------------------|:------|
| devices.total.online.count                                     | count |
| devices.total.online.percentage                                | %     |
| devices.total.offline.count                                    | count |
| devices.total.offline.percentage                               | %     |
| devices.total.alerting.count                                   | count |
| *devices*~status                                               | N/A   |
| *devices*~device.load.count                                    | count |
| *devices*~device.connections.success.count                     | count |
| *devices*~device.connections.auth.count                        | count |
| *devices*~device.connections.assoc.count                       | count |
| *devices*~device.connections.dhcp.count                        | count |
| *devices*~device.connections.dns.count                         | count |
| *devices*~device.traffic.in.bitspersecond                      | b/s   |
| *devices*~device.traffic.out.bitspersecond                     | b/s   |
| *devices*~device.links.ineffective.count                       | count |
| *devices*~*device_links*#link-status                           | N/A   |
| *devices*~*device_links*#device.link.latency.milliseconds      | ms    |
| *devices*~*device_links*#device.link.loss.percentage           | %     |
| *devices*~*device_ports*#port-status                           | N/A   |
| *devices*~*device_ports*#device.port.traffic.in.bitspersecond  | b/s   |
| *devices*~*device_ports*#device.port.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Devices" label="Devices">

| Métrique                                                       | Unité |
|:---------------------------------------------------------------|:------|
| devices.total.online.count                                     | count |
| devices.total.online.percentage                                | %     |
| devices.total.offline.count                                    | count |
| devices.total.offline.percentage                               | %     |
| devices.total.alerting.count                                   | count |
| *devices*~status                                               | N/A   |
| *devices*~device.load.count                                    | count |
| *devices*~device.connections.success.count                     | count |
| *devices*~device.connections.auth.count                        | count |
| *devices*~device.connections.assoc.count                       | count |
| *devices*~device.connections.dhcp.count                        | count |
| *devices*~device.connections.dns.count                         | count |
| *devices*~device.traffic.in.bitspersecond                      | b/s   |
| *devices*~device.traffic.out.bitspersecond                     | b/s   |
| *devices*~device.links.ineffective.count                       | count |
| *devices*~*device_links*#link-status                           | N/A   |
| *devices*~*device_links*#device.link.latency.milliseconds      | ms    |
| *devices*~*device_links*#device.link.loss.percentage           | %     |
| *devices*~*device_ports*#port-status                           | N/A   |
| *devices*~*device_ports*#device.port.traffic.in.bitspersecond  | b/s   |
| *devices*~*device_ports*#device.port.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Network & Networks" label="Network & Networks">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| *networks*#network.connections.success.count | count |
| *networks*#network.connections.auth.count    | count |
| *networks*#network.connections.assoc.count   | count |
| *networks*#network.connections.dhcp.count    | count |
| *networks*#network.connections.dns.count     | count |
| *networks*#network.traffic.in.bitspersecond  | b/s   |
| *networks*#network.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Vpn-Tunnels" label="Vpn-Tunnels">

| Métrique                  | Unité |
|:--------------------------|:------|
| vpn.tunnels.online.count  | count |
| vpn.tunnels.offline.count | count |
| vpn.tunnels.dormant.count | count |
| *tunnels*#status          | N/A   |

</TabItem>
</Tabs>

## Prérequis

Plus d'informations à propos de l'API de Cisco Meraki sont disponibles sur la documentation officielle :
https://documentation.meraki.com/zGeneral_Administration/Other_Topics/The_Cisco_Meraki_Dashboard_API

Afin de pouvoir utiliser l'API Cisco Meraki, activez tout d'abord celle-ci pour votre organisation 
sur le portail Cisco Meraki à l'aide du menu *Organization > Settings > Dashboard API access*.
  
Une fois l'API activée, allez dans le menu *my profile* pour générer une *API Key*. Celle-ci sera associé à votre compte administrateur Cisco Meraki Dashboard.
 
Vous pouvez générer, révoquer et regénérer une API Key pour votre profil.

> Sauvegardez votre *API Key* en lieu sûr puisqu'elle contient des informations d'authentification pour toute votre organisation.
> Il est possible de regénérer l'*API Key* à tout moment, cela révoquera la clé existante.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-meraki-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco Meraki Rest API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Cisco-Meraki-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Meraki-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-cisco-meraki-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Meraki-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Meraki-Cloudcontroller-Restapi-custom" label="Net-Cisco-Meraki-Cloudcontroller-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Meraki-Cloudcontroller-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                  | api.meraki.com    | X           |
| MERAKIAPITOKEN        | Meraki API token                                                                                     |                   | X           |
| MERAKIAPIPROTO        | Define the protocol to use to reach the API                                                                 | https             |             |
| MERAKIAPIPORT         | Define the TCP port to use to reach the API                                                          | 443               |             |
| PROXYURL              | Proxy URL. Example: http://my.proxy:3128                                                             |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Device-Restapi-custom" label="Net-Cisco-Meraki-Device-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Meraki-Device-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                  | api.meraki.com    | X           |
| MERAKIAPITOKEN        | Meraki API token                                                                                     |                   | X           |
| MERAKIAPIPROTO        | Define the protocol to use to reach the API                                                                 | https             |             |
| MERAKIAPIPORT         | Define the TCP port to use to reach the API                                                          | 443               |             |
| MERAKIDEVICENAME      | Filter devices by name (can be a regexp)                                                             |                   |             |
| PROXYURL              | Proxy URL. Example: http://my.proxy:3128                                                             |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Network-Restapi-custom" label="Net-Cisco-Meraki-Network-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Meraki-Network-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                  | api.meraki.com    | X           |
| MERAKIAPITOKEN        | Meraki API token                                                                                     |                   | X           |
| MERAKIAPIPROTO        | Define the protocol to use to reach the API                                                                 | https             |             |
| MERAKIAPIPORT         | Define the TCP port to use to reach the API                                                          | 443               |             |
| MERAKINETWORKNAME     | Filter network name (can be a regexp)                                                                |                   |             |
| PROXYURL              | Proxy URL. Example: http://my.proxy:3128                                                             |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERORGANIZATIONNAME | Filter organization name (can be a regexp)                                                         |                   |             |
| WARNINGAPIREQUESTS200  | Thresholds                                                                                         |                   |             |
| CRITICALAPIREQUESTS200 | Thresholds                                                                                         |                   |             |
| WARNINGAPIREQUESTS404  | Thresholds                                                                                         |                   |             |
| CRITICALAPIREQUESTS404 | Thresholds                                                                                         |                   |             |
| WARNINGAPIREQUESTS429  | Thresholds                                                                                         |                   |             |
| CRITICALAPIREQUESTS429 | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Device" label="Device">

| Macro                      | Description                                                                                                                                                                                                              | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGLINKLATENCY         | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALLINKLATENCY        | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGLINKLOSS            | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALLINKLOSS           | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGLINKSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                            |                   |             |
| CRITICALLINKSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                 |                   |             |
| WARNINGLOAD                | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALLOAD               | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGPORTSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                          |                   |             |
| CRITICALPORTSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display} |                   |             |
| WARNINGPORTTRAFFICIN       | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALPORTTRAFFICIN      | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGPORTTRAFFICOUT      | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALPORTTRAFFICOUT     | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                  |                   |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                           |                   |             |
| WARNINGTOTALALERTING       | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTOTALALERTING      | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGTOTALOFFLINE        | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTOTALOFFLINE       | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGTOTALOFFLINEPRCT    | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTOTALOFFLINEPRCT   | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGTOTALONLINE         | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTOTALONLINE        | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGTOTALONLINEPRCT     | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTOTALONLINEPRCT    | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                                                                                                                                               |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                                                                                                                                               |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                                                                                                                                               |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                       |                   |             |

</TabItem>
<TabItem value="Devices" label="Devices">

| Macro                      | Description                                                                                                                                                                                                              | Valeur par défaut            | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERDEVICENAME           | Filter devices by name (can be a regexp)                                                                                                                                                                                 |                              |             |
| FILTERLINKNAME             | Filter devices by link name (can be a regexp)                                                                                                                                                                                                                 |                              |             |
| FILTERNETWORKID            | Filter devices by network ID (can be a regexp)                                                                                                                                                                           |                              |             |
| FILTERTAGS                 | Filter devices by tags (can be a regexp)                                                                                                                                                                                 |                              |             |
| FILTERORGANIZATIONNAME     | Filter devices by organization name (can be a regexp)                                                                                                                                                                    |                              |             |
| FILTERORGANIZATIONID       | Filter devices by organization ID (can be a regexp)                                                                                                                                                                      |                              |             |
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGLINKLATENCY         | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALLINKLATENCY        | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGLINKLOSS            | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALLINKLOSS           | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGLINKSINEFFECTIVE    | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALLINKSINEFFECTIVE   | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALLINKSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                 | %{link\_status} =~ /failed/i |             |
| WARNINGLINKSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                            |                              |             |
| WARNINGLOAD                | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALLOAD               | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGPORTSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                          |                              |             |
| CRITICALPORTSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display} |                              |             |
| WARNINGPORTTRAFFICIN       | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALPORTTRAFFICIN      | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGPORTTRAFFICOUT      | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALPORTTRAFFICOUT     | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                           | %{status} =~ /alerting/i     |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                  |                              |             |
| WARNINGTOTALALERTING       | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTOTALALERTING      | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGTOTALOFFLINE        | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTOTALOFFLINE       | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGTOTALOFFLINEPRCT    | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTOTALOFFLINEPRCT   | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGTOTALONLINE         | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTOTALONLINE        | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGTOTALONLINEPRCT     | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTOTALONLINEPRCT    | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                                                                                                                                               |                              |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                                                                                                                                               |                              |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                                                                                                                                               |                              |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                       | --verbose                    |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro                      | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Networks" label="Networks">

| Macro                      | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNETWORKNAME          | Filter network name (can be a regexp)                                                              |                   |             |
| FILTERORGANIZATIONNAME     | Filter networks by organization name (can be a regexp)                                             |                   |             |
| FILTERORGANIZATIONID       | Filter networks by organization ID (can be a regexp)                                               |                   |             |
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Vpn-Tunnels" label="Vpn-Tunnels">

| Macro                  | Description                                                                                                                                                                 | Valeur par défaut       | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNETWORKNAME      | Filter VPN tunnels by network name (can be a regexp)                                                                                                                        |                         |             |
| FILTERORGANIZATIONID   | Filter VPN tunnels by organization ID (can be a regexp)                                                                                                                     |                         |             |
| FILTERORGANIZATIONNAME | Filter VPN tunnels by organization name (can be a regexp)                                                                                                                   |                         |             |
| FILTERDEVICESERIAL     | Filter VPN tunnels by device serial (can be a regexp)                                                                                                                       |                         |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /offline/i'). You can use the following variables: %{status}, %{deviceSerial}, %{mode} | %{status} =~ /offline/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{deviceSerial}, %{mode}                                       |                         |             |
| WARNINGTOTALDORMANT    | Thresholds                                                                                                                                                                  |                         |             |
| CRITICALTOTALDORMANT   | Thresholds                                                                                                                                                                  |                         |             |
| WARNINGTOTALOFFLINE    | Thresholds                                                                                                                                                                  |                         |             |
| CRITICALTOTALOFFLINE   | Thresholds                                                                                                                                                                  |                         |             |
| CRITICALTOTALONLINE    | Thresholds                                                                                                                                                                  | 1:                      |             |
| WARNINGTOTALONLINE     | Thresholds                                                                                                                                                                  |                         |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                          |                         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
	--mode=networks \
	--hostname='' \
	--api-token='' \
	--port='' \
	--proto='' \
	--proxyurl=''  \
	--filter-network-name='' \
	--filter-organization-name='' \
	--filter-organization-id='' \
	--warning-connections-success='' \
	--critical-connections-success='' \
	--warning-connections-auth='' \
	--critical-connections-auth='' \
	--warning-connections-assoc='' \
	--critical-connections-assoc='' \
	--warning-connections-dhcp='' \
	--critical-connections-dhcp='' \
	--warning-connections-dns='' \
	--critical-connections-dns='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All networks are ok | '*networks*#network.connections.success.count'=12;;;0;'*networks*#network.connections.auth.count'=10;;;0;'*networks*#network.connections.assoc.count'=5;;;0;'*networks*#network.connections.dhcp.count'=;;;0;'*networks*#network.connections.dns.count'=8;;;0;'*networks*#network.traffic.in.bitspersecond'=15643b/s;;;0;'*networks*#network.traffic.out.bitspersecond'=98745b/s;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                         | Modèle de service associé                                                                                             |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------|
| api-requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/apirequests.pm)]        | Net-Cisco-Meraki-Cloudcontroller-Api-Requests-Restapi-custom                                                          |
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/cache.pm)]                     | Net-Cisco-Meraki-Cloudcontroller-Cache-Restapi-custom                                                                 |
| devices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/devices.pm)]                 | Net-Cisco-Meraki-Cloudcontroller-Device-Restapi-custom<br />Net-Cisco-Meraki-Cloudcontroller-Devices-Restapi-custom   |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/discovery.pm)]             | Used for host discovery                                                                                               |
| list-devices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/listdevices.pm)]        | Used for service discovery                                                                                            |
| list-tags [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/listtags.pm)]              | Used for service discovery                                                                                            |
| list-vpn-tunnels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/listvpntunnels.pm)] | Used for service discovery                                                                                            |
| networks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/networks.pm)]               | Net-Cisco-Meraki-Cloudcontroller-Network-Restapi-custom<br />Net-Cisco-Meraki-Cloudcontroller-Networks-Restapi-custom |
| vpn-tunnels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/meraki/cloudcontroller/restapi/mode/vpntunnels.pm)]          | Net-Cisco-Meraki-Cloudcontroller-Vpn-Tunnels-Restapi-custom                                                           |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Meraki API hostname (default: 'api.meraki.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     | Define the TCP port to use to reach the API (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proto                                    | Define the protocol to reach the API (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-token                                | Meraki API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  | Define the timeout for HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --ignore-permission-errors                 | Ignore permission errors (403 status code).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ignore-orgs-api-disabled                 | Ignore organizations where the API is disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --api-filter-orgs                          | Define the organizations to monitor (regular expression).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --cache-use                                | Use the cache file instead of requesting the API (the cache file can be created with the cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Option                     | Description                                                                        |
|:---------------------------|:-----------------------------------------------------------------------------------|
| --filter-organization-name | Filter organization name (can be a regexp).                                        |
| --warning-* --critical-*   | Thresholds. Can be: 'api-requests-200', 'api-requests-404', 'api-requests-429'.    |

</TabItem>
<TabItem value="Cache" label="Cache">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Device" label="Device">

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                         |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-device-name           | Filter devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                           |
| --filter-network-id            | Filter devices by network ID (can be a regexp).                                                                                                                                                                                                                                                                                                                     |
| --filter-organization-id       | Filter devices by organization ID (can be a regexp).                                                                                                                                                                                                                                                                                                                |
| --filter-organization-name     | Filter devices by organization name (can be a regexp).                                                                                                                                                                                                                                                                                                              |
| --filter-tags                  | Filter devices by tags (can be a regexp).                                                                                                                                                                                                                                                                                                                           |
| --add-switch-ports             | Add switch port statuses and traffic.                                                                                                                                                                                                                                                                                                                               |
| --filter-switch-port           | Filter switch port (can be a regexp).                                                                                                                                                                                                                                                                                                                               |
| --skip-clients                 | Don't monitor clients traffic on device.                                                                                                                                                                                                                                                                                                                            |
| --skip-performance             | Don't monitor appliance performance score.                                                                                                                                                                                                                                                                                                                          |
| --skip-connections             | Don't monitor connection stats.                                                                                                                                                                                                                                                                                                                                     |
| --skip-traffic-disconnect-port | Skip port traffic counters if port status is disconnected.                                                                                                                                                                                                                                                                                                          |
| --unknown-status               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                             |
| --warning-status               | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                             |
| --critical-status              | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                                                                                                                                                                      |
| --unknown-link-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                       |
| --warning-link-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                       |
| --critical-link-status         | Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                            |
| --unknown-port-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                     |
| --warning-port-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                     |
| --critical-port-status         | Define the conditions to match for the status to be CRITICAL (default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                            |
| --warning-* --critical-*       | Thresholds. Can be: 'total-online', 'total-online-prct', 'total-offline', 'total-offline-prct', 'total-alerting', 'traffic-in', 'traffic-out', 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'load', 'links-ineffective', 'link-latency' (ms), ''link-loss' (%), 'port-traffic-in', 'port-traffic-out'.    |

</TabItem>
<TabItem value="Devices" label="Devices">

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                         |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-device-name           | Filter devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                           |
| --filter-network-id            | Filter devices by network ID (can be a regexp).                                                                                                                                                                                                                                                                                                                     |
| --filter-organization-id       | Filter devices by organization ID (can be a regexp).                                                                                                                                                                                                                                                                                                                |
| --filter-organization-name     | Filter devices by organization name (can be a regexp).                                                                                                                                                                                                                                                                                                              |
| --filter-tags                  | Filter devices by tags (can be a regexp).                                                                                                                                                                                                                                                                                                                           |
| --add-switch-ports             | Add switch port statuses and traffic.                                                                                                                                                                                                                                                                                                                               |
| --filter-switch-port           | Filter switch port (can be a regexp).                                                                                                                                                                                                                                                                                                                               |
| --skip-clients                 | Don't monitor clients traffic on device.                                                                                                                                                                                                                                                                                                                            |
| --skip-performance             | Don't monitor appliance performance score.                                                                                                                                                                                                                                                                                                                          |
| --skip-connections             | Don't monitor connection stats.                                                                                                                                                                                                                                                                                                                                     |
| --skip-traffic-disconnect-port | Skip port traffic counters if port status is disconnected.                                                                                                                                                                                                                                                                                                          |
| --unknown-status               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                             |
| --warning-status               | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                             |
| --critical-status              | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                                                                                                                                                                      |
| --unknown-link-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                       |
| --warning-link-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                       |
| --critical-link-status         | Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                            |
| --unknown-port-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                     |
| --warning-port-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                     |
| --critical-port-status         | Define the conditions to match for the status to be CRITICAL (default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                            |
| --warning-* --critical-*       | Thresholds. Can be: 'total-online', 'total-online-prct', 'total-offline', 'total-offline-prct', 'total-alerting', 'traffic-in', 'traffic-out', 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'load', 'links-ineffective', 'link-latency' (ms), ''link-loss' (%), 'port-traffic-in', 'port-traffic-out'.    |

</TabItem>
<TabItem value="Network" label="Network">

| Option                     | Description                                                                                                                                                |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-network-name      | Filter network name (can be a regexp).                                                                                                                     |
| --filter-organization-id   | Filter networks by organization ID (can be a regexp).                                                                                                      |
| --filter-organization-name | Filter networks by organization name (can be a regexp).                                                                                                    |
| --warning-* --critical-*   | Thresholds. Can be: 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Networks" label="Networks">

| Option                     | Description                                                                                                                                                |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-network-name      | Filter network name (can be a regexp).                                                                                                                     |
| --filter-organization-id   | Filter networks by organization ID (can be a regexp).                                                                                                      |
| --filter-organization-name | Filter networks by organization name (can be a regexp).                                                                                                    |
| --warning-* --critical-*   | Thresholds. Can be: 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Vpn-Tunnels" label="Vpn-Tunnels">

| Option                     | Description                                                                                                                                                                   |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-network-name      | Filter VPN tunnels by network name (can be a regexp).                                                                                                                         |
| --filter-organization-id   | Filter VPN tunnels by organization ID (can be a regexp).                                                                                                                      |
| --filter-organization-name | Filter VPN tunnels by organization name (can be a regexp).                                                                                                                    |
| --filter-device-serial     | Filter VPN tunnels by device serial (can be a regexp).                                                                                                                        |
| --unknown-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{deviceSerial}, %{mode}                                         |
| --warning-status           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{deviceSerial}, %{mode}                                         |
| --critical-status          | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /offline/i'). You can use the following variables: %{status}, %{deviceSerial}, %{mode}   |
| --warning-* --critical-*   | Thresholds. Can be: 'total-online', 'total-offline', 'total-dormant'.                                                                                                         |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
	--mode=networks \
	--help
```
