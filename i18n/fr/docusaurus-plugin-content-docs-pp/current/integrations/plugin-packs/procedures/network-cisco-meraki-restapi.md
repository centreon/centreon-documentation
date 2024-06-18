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

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Meraki-Cloudcontroller-Restapi** est utilisé.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Device-Restapi-custom" label="Net-Cisco-Meraki-Device-Restapi-custom">

| Alias  | Modèle de service                                      | Description                            |
|:-------|:-------------------------------------------------------|:---------------------------------------|
| Device | Net-Cisco-Meraki-Cloudcontroller-Device-Restapi-custom | Contrôle l'utilisation des équipements |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Meraki-Device-Restapi** est utilisé.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Network-Restapi-custom" label="Net-Cisco-Meraki-Network-Restapi-custom">

| Alias   | Modèle de service                                       | Description                        |
|:--------|:--------------------------------------------------------|:-----------------------------------|
| Network | Net-Cisco-Meraki-Cloudcontroller-Network-Restapi-custom | Contrôle l'utilisation des réseaux |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Meraki-Network-Restapi** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias    | Modèle de service                                        | Description                                         | Découverte |
|:---------|:---------------------------------------------------------|:----------------------------------------------------|:-----------|
| Cache    | Net-Cisco-Meraki-Cloudcontroller-Cache-Restapi-custom    | Service permettant de générer les fichiers de cache |            |
| Devices  | Net-Cisco-Meraki-Cloudcontroller-Devices-Restapi-custom  | Contrôle l'utilisation des équipements              | X          |
| Networks | Net-Cisco-Meraki-Cloudcontroller-Networks-Restapi-custom | Contrôle l'utilisation des réseaux                  |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/onprem/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle       | Description                                  |
|:----------------------|:---------------------------------------------|
| Cisco Meraki Devices  | Discover Cisco Meraki Devices using RestAPI  |
| Cisco Meraki Networks | Discover Cisco Meraki Networks using RestAPI |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                 | Description                                     |
|:--------------------------------|:------------------------------------------------|
| Net-Cisco-Meraki-RestAPI-Device | Découvre les équipements et supervise le statut |
| Net-Cisco-Meraki-RestAPI-Tag    | Découvre les tags                               |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *org_name*#organization.api.requests.200.count |       |
| *org_name*#organization.api.requests.404.count |       |
| *org_name*#organization.api.requests.429.count |       |

</TabItem>
<TabItem value="Cache" label="Cache">

Ce service n'intègre pas de métriques.

</TabItem>
<TabItem value="Devices" label="Devices">

| Métrique                                                      | Unité |
|:--------------------------------------------------------------|:------|
| devices.total.online.count                                    |       |
| devices.total.online.percentage                               | %     |
| devices.total.offline.count                                   |       |
| devices.total.offline.percentage                              | %     |
| devices.total.alerting.count                                  |       |
| devices status                                                |       |
| *device_serial*#device.load.count                             |       |
| *device_serial*#device.connections.success.count              |       |
| *device_serial*#device.connections.auth.count                 |       |
| *device_serial*#device.connections.assoc.count                |       |
| *device_serial*#device.connections.dhcp.count                 |       |
| *device_serial*#device.connections.dns.count                  |       |
| *device_serial*#device.traffic.in.bitspersecond               | b/s   |
| *device_serial*#device.traffic.out.bitspersecond              | b/s   |
| *device_serial*#device.links.ineffective.count                |       |
| device link status                                            |       |
| *device_serial~link_name*#device.link.latency.milliseconds    | ms    |
| *device_serial~link_name*#device.link.loss.percentage         | %     |
| device port status                                            |       |
| *device_serial~port_id*#device.port.traffic.in.bitspersecond  | b/s   |
| *device_serial~port_id*#device.port.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Networks" label="Networks">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *network_name*#network.connections.success.count |       |
| *network_name*#network.connections.auth.count    |       |
| *network_name*#network.connections.assoc.count   |       |
| *network_name*#network.connections.dhcp.count    |       |
| *network_name*#network.connections.dns.count     |       |
| *network_name*#network.traffic.in.bitspersecond  |       |
| *network_name*#network.traffic.out.bitspersecond |       |

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

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

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
<TabItem value="Net-Cisco-Meraki-Cloudcontroller-Restapi" label="Net-Cisco-Meraki-Cloudcontroller-Restapi">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Meraki-Cloudcontroller-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                   | api.meraki.com    |             |
| MERAKIAPIPORT         | Port used                                                                                             | 443               |             |
| MERAKIAPIPROTO        | Specify HTTPS if needed                                                                               | https             |             |
| MERAKIAPITOKEN        | Meraki API token                                                                                      |                   |             |
| PROXYURL              | Proxy URL. E.g.: http://my.proxy:3128                                                                 |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Device-Restapi" label="Net-Cisco-Meraki-Device-Restapi">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Meraki-Device-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                   | api.meraki.com    |             |
| MERAKIAPIPORT         | Port used                                                                                             | 443               |             |
| MERAKIAPIPROTO        | Specify HTTPS if needed                                                                               | https             |             |
| MERAKIAPITOKEN        | Meraki API token                                                                                      |                   |             |
| MERAKIDEVICENAME      | Filter devices by name                                                                                |                   |             |
| PROXYURL              | Proxy URL. E.g.: http://my.proxy:3128                                                                   |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Net-Cisco-Meraki-Network-Restapi" label="Net-Cisco-Meraki-Network-Restapi">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Meraki-Network-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| MERAKIAPIHOSTNAME     | Meraki API hostname                                                                                   | api.meraki.com    |             |
| MERAKIAPIPORT         | Port used                                                                                             | 443               |             |
| MERAKIAPIPROTO        | Specify HTTPS if needed                                                                               | https             |             |
| MERAKIAPITOKEN        | Meraki API token                                                                                      |                   |             |
| MERAKINETWORKNAME     | Filter network name                                                                                   |                   |             |
| PROXYURL              | Proxy URL. E.g.: http://my.proxy:3128                                                                 |                   |             |
| MERAKIAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/onprem/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERORGANIZATIONNAME | Filter organization name (can be a regexp)                                                          |                   |             |
| WARNINGAPIREQUESTS200  | Thresholds                                                                                          |                   |             |
| CRITICALAPIREQUESTS200 | Thresholds                                                                                          |                   |             |
| WARNINGAPIREQUESTS404  | Thresholds                                                                                          |                   |             |
| CRITICALAPIREQUESTS404 | Thresholds                                                                                          |                   |             |
| WARNINGAPIREQUESTS429  | Thresholds                                                                                          |                   |             |
| CRITICALAPIREQUESTS429 | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Device" label="Device">

| Macro                      | Description                                                                                                                                                                                   | Valeur par défaut | Obligatoire |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGLINKLATENCY         | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALLINKLATENCY        | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGLINKLOSS            | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALLINKLOSS           | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGLINKSTATUS          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                            |                   |             |
| CRITICALLINKSTATUS         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                 |                   |             |
| WARNINGLOAD                | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALLOAD               | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGPORTSTATUS          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                          |                   |             |
| CRITICALPORTSTATUS         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display} |                   |             |
| WARNINGPORTTRAFFICIN       | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALPORTTRAFFICIN      | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGPORTTRAFFICOUT      | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALPORTTRAFFICOUT     | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGSTATUS              | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                  |                   |             |
| CRITICALSTATUS             | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                           |                   |             |
| WARNINGTOTALALERTING       | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALALERTING      | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALOFFLINE        | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALOFFLINE       | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALOFFLINEPRCT    | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALOFFLINEPRCT   | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALONLINE         | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALONLINE        | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTOTALONLINEPRCT     | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTOTALONLINEPRCT    | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                                                                                                                    |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                                                                                                                    |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                                                                                                                    |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                           |                   |             |

</TabItem>
<TabItem value="Devices" label="Devices">

| Macro                      | Description                                                                                                                                                                                   | Valeur par défaut           | Obligatoire |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:------------|
| FILTERDEVICENAME           | Filter devices by name (can be a regexp)                                                                                                                                                      |                             |             |
| FILTERNETWORKID            | Filter devices by network ID (can be a regexp)                                                                                                                                                |                             |             |
| FILTERTAGS                 | Filter devices by tags (can be a regexp)                                                                                                                                                      |                             |             |
| FILTERORGANIZATIONNAME     | Filter devices by organization name (can be a regexp)                                                                                                                                         |                             |             |
| FILTERORGANIZATIONID       | Filter devices by organization ID (can be a regexp)                                                                                                                                           |                             |             |
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGLINKLATENCY         | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKLATENCY        | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGLINKLOSS            | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKLOSS           | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGLINKSINEFFECTIVE    | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKSINEFFECTIVE   | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLINKSTATUS         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                 | %{link_status} =~ /failed/i |             |
| WARNINGLINKSTATUS          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                            |                             |             |
| WARNINGLOAD                | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALLOAD               | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGPORTSTATUS          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                          |                             |             |
| CRITICALPORTSTATUS         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display} |                             |             |
| WARNINGPORTTRAFFICIN       | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALPORTTRAFFICIN      | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGPORTTRAFFICOUT      | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALPORTTRAFFICOUT     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALSTATUS             | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                           | %{status} =~ /alerting/i    |             |
| WARNINGSTATUS              | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                  |                             |             |
| WARNINGTOTALALERTING       | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALALERTING      | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALOFFLINE        | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALOFFLINE       | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALOFFLINEPRCT    | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALOFFLINEPRCT   | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALONLINE         | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALONLINE        | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTOTALONLINEPRCT     | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTOTALONLINEPRCT    | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                                                                                                                    |                             |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                                                                                                                    |                             |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                                                                                                                    |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                      | --verbose                   |             |

</TabItem>
<TabItem value="Networks" label="Networks">

| Macro                      | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNETWORKNAME          | Filter network name (can be a regexp)                                                               |                   |             |
| FILTERTAGS                 |                                                                                                     |                   |             |
| FILTERORGANIZATIONNAME     | Filter networks by organization name (can be a regexp)                                              |                   |             |
| FILTERORGANIZATIONID       | Filter networks by organization ID (can be a regexp)                                                |                   |             |
| WARNINGCONNECTIONSASSOC    | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSASSOC   | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSAUTH     | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSAUTH    | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSDHCP     | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSDHCP    | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSDNS      | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSDNS     | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONSSUCCESS  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONSSUCCESS | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICIN           | Thresholds                                                                                          |                   |             |
| CRITICALTRAFFICIN          | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICOUT          | Thresholds                                                                                          |                   |             |
| CRITICALTRAFFICOUT         | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
  --plugin='network::cisco::meraki::cloudcontroller::restapi::plugin' \
  --mode='devices' \
  --hostname='api.meraki.com' \
  --api-token='12345abcd6789efgh0123abcd4567efgh8901abcd' \
  --proxyurl='http://proxy.mycompany:8080' \
  --filter-device-name='centreon-par-training-ap' \
  --critical-status='%{status} =~ /alerting/i' \
  --critical-link-status='%{link_status} =~ /failed/i' \
  --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Device 'centreon-par-training-ap' status: online - connection success: 0 - traffic in: 51.66 b/s, out: 515.86 b/s - link 'WAN 1' status: active | 
'devices.total.online.count'=0;;;0;1 'devices.total.offline.count'=0;;;0;1 'devices.total.alerting.count'=0;;;0;1 
'centreon-par-training-ap#device.connections.success.count'=0;;;0; 'centreon-par-training-ap#device.connections.auth.count'=0;;;0; 
'centreon-par-training-ap#device.connections.assoc.count'=0;;;0; 'centreon-par-training-ap#device.connections.dhcp.count'=0;;;0; 
'centreon-par-training-ap#device.connections.dns.count'=0;;;0; 'centreon-par-training-ap#device.traffic.in.bitspersecond'=51.6626907073509b/s;;;0; 
'centreon-par-training-ap#device.traffic.out.bitspersecond'=515.864632454924b/s;;;0;
checking device 'centreon-par-training-ap'
    status: online
    connection success: 0
    traffic in: 51.66 b/s, out: 515.86 b/s
    link 'WAN 1' status: active
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode         | Modèle de service associé                                                                               |
|:-------------|:--------------------------------------------------------------------------------------------------------|
| api-requests | Net-Cisco-Meraki-Cloudcontroller-Api-Requests-Restapi                                                   |
| cache        | Net-Cisco-Meraki-Cloudcontroller-Cache-Restapi                                                          |
| devices      | Net-Cisco-Meraki-Cloudcontroller-Device-Restapi<br />Net-Cisco-Meraki-Cloudcontroller-Devices-Restapi   |
| discovery    | Used for host discovery                                                                                 |
| list-devices | Used for service discovery                                                                              |
| list-tags    | Used for service discovery                                                                              |
| networks     | Net-Cisco-Meraki-Cloudcontroller-Network-Restapi<br />Net-Cisco-Meraki-Cloudcontroller-Networks-Restapi |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global       |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global       |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global       |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global       |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp. E.g.: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). E.g.: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). E.g.: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output       |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). E.g.: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --change-exit                              | Replace an exit code with one of your choice. E.g.: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. E.g.: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output       |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --hostname                                 | Meraki API hostname (default: 'api.meraki.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Api          |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --proto                                    | Specify HTTPS if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Api          |
| --api-token                                | Meraki API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Api          |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Api          |
| --ignore-permission-errors                 | Ignore permission errors (403 status code).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --ignore-orgs-api-disabled                 | Ignore organizations with API disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --api-filter-orgs                          | Filter organizations (regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Api          |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Http global  |
| --proxyurl                                 | Proxy URL. E.g.: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Http global  |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Http global  |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Api-Requests" label="Api-Requests">

| Option                     | Description                                                                        | Type |
|:---------------------------|:-----------------------------------------------------------------------------------|:-----|
| --filter-organization-name | Filter organization name (can be a regexp).                                        | Mode |
| --warning-* --critical-*   | Thresholds. Can be: 'api-requests-200', 'api-requests-404', 'api-requests-429'.    | Mode |

</TabItem>
<TabItem value="Cache" label="Cache">

| Option | Description | Type |
|:-------|:------------|:-----|

</TabItem>
<TabItem value="Device" label="Device">

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                         | Type |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-device-name           | Filter devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --filter-network-id            | Filter devices by network ID (can be a regexp).                                                                                                                                                                                                                                                                                                                     | Mode |
| --filter-organization-id       | Filter devices by organization ID (can be a regexp).                                                                                                                                                                                                                                                                                                                | Mode |
| --filter-organization-name     | Filter devices by organization name (can be a regexp).                                                                                                                                                                                                                                                                                                              | Mode |
| --filter-tags                  | Filter devices by tags (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --add-switch-ports             | Add switch port statuses and traffic.                                                                                                                                                                                                                                                                                                                               | Mode |
| --filter-switch-port           | Filter switch port (can be a regexp).                                                                                                                                                                                                                                                                                                                               | Mode |
| --skip-clients                 | Don't monitor clients traffic on device.                                                                                                                                                                                                                                                                                                                            | Mode |
| --skip-performance             | Don't monitor appliance perfscore.                                                                                                                                                                                                                                                                                                                                  | Mode |
| --skip-connections             | Don't monitor connection stats.                                                                                                                                                                                                                                                                                                                                     | Mode |
| --skip-traffic-disconnect-port | Skip port traffic counters if port status is disconnected.                                                                                                                                                                                                                                                                                                          | Mode |
| --unknown-status               | Set unknown threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --warning-status               | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --critical-status              | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                 | Mode |
| --unknown-link-status          | Set unknown threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --warning-link-status          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --critical-link-status         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                       | Mode |
| --unknown-port-status          | Set unknown threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --warning-port-status          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --critical-port-status         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                       | Mode |
| --warning-* --critical-*       | Thresholds. Can be: 'total-online', 'total-online-prct', 'total-offline', 'total-offline-prct', 'total-alerting', 'traffic-in', 'traffic-out', 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'load', 'links-ineffective', 'link-latency' (ms), ''link-loss' (%), 'port-traffic-in', 'port-traffic-out'.    | Mode |

</TabItem>
<TabItem value="Devices" label="Devices">

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                         | Type |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-device-name           | Filter devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --filter-network-id            | Filter devices by network ID (can be a regexp).                                                                                                                                                                                                                                                                                                                     | Mode |
| --filter-organization-id       | Filter devices by organization ID (can be a regexp).                                                                                                                                                                                                                                                                                                                | Mode |
| --filter-organization-name     | Filter devices by organization name (can be a regexp).                                                                                                                                                                                                                                                                                                              | Mode |
| --filter-tags                  | Filter devices by tags (can be a regexp).                                                                                                                                                                                                                                                                                                                           | Mode |
| --add-switch-ports             | Add switch port statuses and traffic.                                                                                                                                                                                                                                                                                                                               | Mode |
| --filter-switch-port           | Filter switch port (can be a regexp).                                                                                                                                                                                                                                                                                                                               | Mode |
| --skip-clients                 | Don't monitor clients traffic on device.                                                                                                                                                                                                                                                                                                                            | Mode |
| --skip-performance             | Don't monitor appliance perfscore.                                                                                                                                                                                                                                                                                                                                  | Mode |
| --skip-connections             | Don't monitor connection stats.                                                                                                                                                                                                                                                                                                                                     | Mode |
| --skip-traffic-disconnect-port | Skip port traffic counters if port status is disconnected.                                                                                                                                                                                                                                                                                                          | Mode |
| --unknown-status               | Set unknown threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --warning-status               | Set warning threshold for status. You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                                                        | Mode |
| --critical-status              | Set critical threshold for status (Default: '%{status} =~ /alerting/i'). You can use the following variables: %{status}, %{display}                                                                                                                                                                                                                                 | Mode |
| --unknown-link-status          | Set unknown threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --warning-link-status          | Set warning threshold for status. You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                                                                  | Mode |
| --critical-link-status         | Set critical threshold for status (Default: '%{link\_status} =~ /failed/i'). You can use the following variables: %{link\_status}, %{display}                                                                                                                                                                                                                       | Mode |
| --unknown-port-status          | Set unknown threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --warning-port-status          | Set warning threshold for status. You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                                                                                                | Mode |
| --critical-port-status         | Set critical threshold for status (Default: '%{port\_enabled} == 1 and %{port\_status} !~ /^connected/i'). You can use the following variables: %{port\_status}, %{port\_enabled}, %{display}                                                                                                                                                                       | Mode |
| --warning-* --critical-*       | Thresholds. Can be: 'total-online', 'total-online-prct', 'total-offline', 'total-offline-prct', 'total-alerting', 'traffic-in', 'traffic-out', 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'load', 'links-ineffective', 'link-latency' (ms), ''link-loss' (%), 'port-traffic-in', 'port-traffic-out'.    | Mode |

</TabItem>
<TabItem value="Network" label="Network">

| Option                     | Description                                                                                                                                                | Type |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-network-name      | Filter network name (can be a regexp).                                                                                                                     | Mode |
| --filter-organization-id   | Filter networks by organization ID (can be a regexp).                                                                                                      | Mode |
| --filter-organization-name | Filter networks by organization name (can be a regexp).                                                                                                    | Mode |
| --warning-* --critical-*   | Thresholds. Can be: 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'traffic-in', 'traffic-out'.    | Mode |

</TabItem>
<TabItem value="Networks" label="Networks">

| Option                     | Description                                                                                                                                                | Type |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-network-name      | Filter network name (can be a regexp).                                                                                                                     | Mode |
| --filter-organization-id   | Filter networks by organization ID (can be a regexp).                                                                                                      | Mode |
| --filter-organization-name | Filter networks by organization name (can be a regexp).                                                                                                    | Mode |
| --warning-* --critical-*   | Thresholds. Can be: 'connections-success', 'connections-auth', 'connections-assoc', 'connections-dhcp', 'connections-dns', 'traffic-in', 'traffic-out'.    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
	--plugin=network::cisco::meraki::cloudcontroller::restapi::plugin \
	--mode=devices \
    --help
```
