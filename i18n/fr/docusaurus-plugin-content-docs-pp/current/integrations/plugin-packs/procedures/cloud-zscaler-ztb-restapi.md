---
id: cloud-zscaler-ztb-restapi
title: Zscaler Zero Trust Branch API
description: "Supervise les clusters et passerelles Zscaler Zero Trust Branch via API : état, tunnels IPsec, App Connectors, CPU, mémoire, disque, interfaces."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Zscaler Zero Trust Branch API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Zscaler Zero Trust Branch API** apporte 2 modèles d'hôte :

* **Cloud-Zscaler-Ztb-Cluster-Restapi-custom**
* **Cloud-Zscaler-Ztb-Gateway-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Zscaler-Ztb-Cluster-Restapi-custom" label="Cloud-Zscaler-Ztb-Cluster-Restapi-custom">

| Alias                | Modèle de service                                     | Description                                  |
|:---------------------|:------------------------------------------------------|:---------------------------------------------|
| Cluster-Appconnector | Cloud-Zscaler-Ztb-Cluster-Appconnector-Restapi-custom | Contrôle l'état et le nombre d'Appconnectors |
| Cluster-Ipsec        | Cloud-Zscaler-Ztb-Cluster-Ipsec-Restapi-custom        | Contrôle l'état des tunnels IPSec            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Zscaler-Ztb-Cluster-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Zscaler-Ztb-Gateway-Restapi-custom" label="Cloud-Zscaler-Ztb-Gateway-Restapi-custom">

| Alias              | Modèle de service                                   | Description                              |
|:-------------------|:----------------------------------------------------|:-----------------------------------------|
| Gateway-Containers | Cloud-Zscaler-Ztb-Gateway-Containers-Restapi-custom | Contrôle les conteneurs d'une passerelle |
| Gateway-Cpu        | Cloud-Zscaler-Ztb-Gateway-Cpu-Restapi-custom        | Contrôle l'utilisation CPU               |
| Gateway-Disk       | Cloud-Zscaler-Ztb-Gateway-Disk-Restapi-custom       | Contrôle l'utilisation du disque         |
| Gateway-Memory     | Cloud-Zscaler-Ztb-Gateway-Memory-Restapi-custom     | Contrôle l'utilisation de la mémoire     |
| Gateway-Status     | Cloud-Zscaler-Ztb-Gateway-Status-Restapi-custom     | Contrôle l'état général d'une passerelle |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Zscaler-Ztb-Gateway-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias              | Modèle de service                                   | Description                                                                                                               | Découverte |
|:-------------------|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|:----------:|
| Cache              | Cloud-Zscaler-Ztb-Cache-Restapi-custom              | Stocke des données réutilisables dans un fichier de cache pour les autres modes afin de réduire le nombre de requêtes API |            |
| Gateway-Interfaces | Cloud-Zscaler-Ztb-Gateway-Interfaces-Restapi-custom | Contrôle les statuts et les statistiques d'une ou plusieurs interfaces                                                    | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle      | Description                                                       |
|:---------------------|:------------------------------------------------------------------|
| Zscaler ZTB Gateways | Découvre les passerelles Zscaler Zero Trust Branch via l'API REST |
| Zscaler ZTB Clusters | Découvre les clusters Zscaler Zero Trust Branch via l'API REST    |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                                   | Description                                                                                               |
|:--------------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| Cloud-Zscaler-Ztb-Restapi-Gateway-Interfaces-Name | Découvre les interfaces réseau de la passerelle par leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

Aucune métrique n'est collectée : ce service crée uniquement le
fichier de cache utilisé par les autres services.

</TabItem>
<TabItem value="Cluster-Appconnector" label="Cluster-Appconnector">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| appconnectors.detected.count               | count |
| appconnector-status                        | N/A   |
| *appconnectors*#appconnector.running.count | count |

</TabItem>
<TabItem value="Cluster-Ipsec" label="Cluster-Ipsec">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| tunnels.ipsec.detected.count                     | count |
| ike-status                                       | N/A   |
| sa-status                                        | N/A   |
| *tunnels*#tunnel.ipsec.refresh.time.last.seconds | s     |

</TabItem>
<TabItem value="Gateway-Containers" label="Gateway-Containers">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| gateways.detected.count              | count |
| container.cpu.utilization.percentage | %     |
| container.memory.usage.bytes         | B     |

</TabItem>
<TabItem value="Gateway-Cpu" label="Gateway-Cpu">

| Nom                                | Unité |
|:-----------------------------------|:------|
| gateways.detected.count            | count |
| gateway.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Gateway-Disk" label="Gateway-Disk">

| Nom                           | Unité |
|:------------------------------|:------|
| gateways.detected.count       | count |
| gateway.disk.usage.bytes      | B     |
| gateway.disk.free.bytes       | B     |
| gateway.disk.usage.percentage | %     |

</TabItem>
<TabItem value="Gateway-Interfaces" label="Gateway-Interfaces">

| Nom                                         | Unité |
|:--------------------------------------------|:------|
| gateways.detected.count                     | count |
| interface-status                            | N/A   |
| gateway.interface.traffic.in.bitspersecond  | b/s   |
| gateway.interface.traffic.out.bitspersecond | b/s   |
| gateway.interface.jitter.milliseconds       | ms    |
| gateway.interface.latency.milliseconds      | ms    |
| gateway.interface.loss.percentage           | %     |

</TabItem>
<TabItem value="Gateway-Memory" label="Gateway-Memory">

| Nom                             | Unité |
|:--------------------------------|:------|
| gateways.detected.count         | count |
| gateway.memory.usage.bytes      | B     |
| gateway.memory.free.bytes       | B     |
| gateway.memory.usage.percentage | %     |
| gateway.swap.usage.bytes        | B     |

</TabItem>
<TabItem value="Gateway-Status" label="Gateway-Status">

| Nom                                         | Unité |
|:--------------------------------------------|:------|
| gateways.detected.count                     | count |
| gateway-status                              | N/A   |
| running-version                             | N/A   |
| *gateways*#gateway.update.time.last.seconds | s     |
| gateway-health                              | N/A   |
| gateway-vrrp-status                         | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Client d'API Zscaler

Le connecteur utilise l'API REST de Zero Trust Branch via Zscaler OneAPI.
L'authentification repose sur le flux OAuth2 *client credentials* géré par
ZIdentity.

1. Dans le portail d'administration ZIdentity, allez à **Administration > API
Configuration > OneAPI > API Clients** et [ajoutez un client d'API](https://help.zscaler.com/unified/adding-api-client)
utilisant la méthode d'authentification **Client Secret**.
2. Attribuez à ce client d'API un rôle donnant un accès en lecture seule aux
ressources de l'API Zero Trust Branch.
3. Notez le **Client ID** et le **Client Secret** (le secret n'est affiché
qu'une seule fois). Ils seront utilisés dans les macros d'hôte **CLIENT_ID** et
**CLIENT_SECRET**.
4. Identifiez les domaines suivants :
   - le domaine personnalisé (*vanity domain*) ZIdentity utilisé pour obtenir le
   jeton OAuth2 (par exemple `mycompany.zslogin.net`), à renseigner dans la macro
   **LOGIN_DOMAIN**,
   - le domaine de votre API ZTB (par exemple `mycompany-api.goairgap.com`), à
   renseigner dans la macro **API_DOMAIN**.

### Flux réseaux

Le collecteur doit pouvoir joindre le domaine d'authentification et le domaine
de l'API en HTTPS (TCP/443).

### Cache

Pour limiter le nombre d'appels à l'API, les services de ce connecteur peuvent
lire leurs données dans un fichier de cache au lieu d'interroger l'API. Pour
cela :

1. Créez un service utilisant le modèle de service **Cache** (il n'est pas créé
automatiquement par les modèles d'hôte), avec un intervalle de contrôle
inférieur à la durée de vie du cache (30 minutes par défaut, voir l'option
`--cache-lifetime`).
2. Ajoutez l'option `--cache-use` dans la macro **EXTRA_OPTIONS** des autres
services.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-zscaler-ztb-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-zscaler-ztb-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-zscaler-ztb-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Zscaler Zero Trust Branch API**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Cloud-Zscaler-Ztb-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Zscaler-Ztb-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-zscaler-ztb-restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-Zscaler-Ztb-Cluster-Restapi-custom" label="Cloud-Zscaler-Ztb-Cluster-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Zscaler-Ztb-Cluster-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROTO             | Define `https` if needed                                                                                                                                                                     | https             |             |
| PORT              | Port used                                                                                                                                                                                    | 443               |             |
| API_DOMAIN        | Define the domain for ZTB API (example: `mycompany-api.goairgap.com`)                                                                                                                        |                   | X           |
| CLIENT_ID         | Define client ID                                                                                                                                                                             |                   | X           |
| CLIENT_SECRET     | Define client secret                                                                                                                                                                         |                   | X           |
| CLUSTER_ID        | Identifiant du cluster à superviser, sous forme d'expression régulière (exemple : `^<id>$`). Renseigné automatiquement par la découverte d'hôtes. Si vide, tous les clusters sont supervisés |                   |             |
| LOGIN_DOMAIN      | Define the domain for OAuth2 authentication (example: `test.zslogin.net`)                                                                                                                    |                   | X           |
| API_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                           |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Zscaler-Ztb-Gateway-Restapi-custom" label="Cloud-Zscaler-Ztb-Gateway-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Zscaler-Ztb-Gateway-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                                                                                                                              | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROTO             | Define `https` if needed                                                                                                                                                                                 | https             |             |
| PORT              | Port used                                                                                                                                                                                                | 443               |             |
| API_DOMAIN        | Define the domain for ZTB API (example: `mycompany-api.goairgap.com`)                                                                                                                                    |                   | X           |
| CLIENT_ID         | Define client ID                                                                                                                                                                                         |                   | X           |
| CLIENT_SECRET     | Define client secret                                                                                                                                                                                     |                   | X           |
| GATEWAY_ID        | Identifiant de la passerelle à superviser, sous forme d'expression régulière (exemple : `^<id>$`). Renseigné automatiquement par la découverte d'hôtes. Si vide, toutes les passerelles sont supervisées |                   |             |
| LOGIN_DOMAIN      | Define the domain for OAuth2 authentication (example: `test.zslogin.net`)                                                                                                                                |                   | X           |
| API_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                       |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRA_OPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cluster-Appconnector" label="Cluster-Appconnector">

| Macro                           | Description                                                                                                                                             | Valeur par défaut          | Obligatoire |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| UNKNOWN_APPCONNECTOR_STATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`  |                            |             |
| WARNING_APPCONNECTORS_DETECTED  | Threshold                                                                                                                                               |                            |             |
| CRITICAL_APPCONNECTORS_DETECTED | Threshold                                                                                                                                               |                            |             |
| WARNING_APPCONNECTOR_RUNNING    | Threshold                                                                                                                                               |                            |             |
| CRITICAL_APPCONNECTOR_RUNNING   | Threshold                                                                                                                                               |                            |             |
| CRITICAL_APPCONNECTOR_STATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}` | %\{status\} ne "connected" |             |
| WARNING_APPCONNECTOR_STATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`  |                            |             |
| EXTRA_OPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).        | --verbose                  |             |

</TabItem>
<TabItem value="Cluster-Ipsec" label="Cluster-Ipsec">

| Macro                           | Description                                                                                                                                          | Valeur par défaut               | Obligatoire |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| INCLUDE_TUNNEL_NAME             | Include tunnel names (regexp)                                                                                                                        |                                 |             |
| EXCLUDE_TUNNEL_NAME             | Exclude tunnel names (regexp)                                                                                                                        |                                 |             |
| UNKNOWN_SA_STATUS               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`   |                                 |             |
| UNKNOWN_IKE_STATUS              | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`  |                                 |             |
| CRITICAL_IKE_STATUS             | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}` | %\{ikeStatus\} !~ /established/ |             |
| WARNING_IKE_STATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`  |                                 |             |
| WARNING_LAST_REFRESH_TIME       | Threshold                                                                                                                                            |                                 |             |
| CRITICAL_LAST_REFRESH_TIME      | Threshold                                                                                                                                            |                                 |             |
| CRITICAL_SA_STATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`  | %\{saStatus\} !~ /established/  |             |
| WARNING_SA_STATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`   |                                 |             |
| WARNING_TUNNELS_IPSEC_DETECTED  | Threshold                                                                                                                                            |                                 |             |
| CRITICAL_TUNNELS_IPSEC_DETECTED | Threshold                                                                                                                                            |                                 |             |
| EXTRA_OPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).     | --verbose                       |             |

</TabItem>
<TabItem value="Gateway-Containers" label="Gateway-Containers">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INCLUDE_CONTAINER_NAME   | Include container names (regexp)                                                                                                                 |                   |             |
| EXCLUDE_CONTAINER_NAME   | Exclude container names (regexp)                                                                                                                 |                   |             |
| WARNING_CPU_UTILIZATION  | Threshold in percentage                                                                                                                          |                   |             |
| CRITICAL_CPU_UTILIZATION | Threshold in percentage                                                                                                                          |                   |             |
| WARNING_MEMORY_USAGE     | Threshold in bytes                                                                                                                               |                   |             |
| CRITICAL_MEMORY_USAGE    | Threshold in bytes                                                                                                                               |                   |             |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Gateway-Cpu" label="Gateway-Cpu">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_CPU_UTILIZATION  | Threshold in percentage                                                                                                                          | 80                |             |
| CRITICAL_CPU_UTILIZATION | Threshold in percentage                                                                                                                          | 90                |             |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Gateway-Disk" label="Gateway-Disk">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_DISK_USAGE       | Threshold in bytes                                                                                                                               |                   |             |
| CRITICAL_DISK_USAGE      | Threshold in bytes                                                                                                                               |                   |             |
| WARNING_DISK_USAGE_FREE  | Threshold in bytes                                                                                                                               |                   |             |
| CRITICAL_DISK_USAGE_FREE | Threshold in bytes                                                                                                                               |                   |             |
| WARNING_DISK_USAGE_PRCT  | Threshold in percentage                                                                                                                          | 80                |             |
| CRITICAL_DISK_USAGE_PRCT | Threshold in percentage                                                                                                                          | 90                |             |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Gateway-Interfaces" label="Gateway-Interfaces">

| Macro                          | Description                                                                                                                                                                                                      | Valeur par défaut                                         | Obligatoire |
|:-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:-----------:|
| INCLUDE_INTERFACE_NAME         | Include interface names (regexp)                                                                                                                                                                                 |                                                           |             |
| EXCLUDE_INTERFACE_NAME         | Exclude interface names (regexp)                                                                                                                                                                                 |                                                           |             |
| UNKNOWN_INTERFACE_STATUS       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`  |                                                           |             |
| WARNING_INTERFACE_JITTER       | Threshold                                                                                                                                                                                                        |                                                           |             |
| CRITICAL_INTERFACE_JITTER      | Threshold                                                                                                                                                                                                        |                                                           |             |
| WARNING_INTERFACE_LATENCY      | Threshold                                                                                                                                                                                                        |                                                           |             |
| CRITICAL_INTERFACE_LATENCY     | Threshold                                                                                                                                                                                                        |                                                           |             |
| WARNING_INTERFACE_LOSS         | Threshold                                                                                                                                                                                                        |                                                           |             |
| CRITICAL_INTERFACE_LOSS        | Threshold                                                                                                                                                                                                        |                                                           |             |
| CRITICAL_INTERFACE_STATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}` | %\{adminState\} =~ /up/ and %\{operationalState\} !~ /up/ |             |
| WARNING_INTERFACE_STATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`  |                                                           |             |
| WARNING_INTERFACE_TRAFFIC_IN   | Threshold                                                                                                                                                                                                        |                                                           |             |
| CRITICAL_INTERFACE_TRAFFIC_IN  | Threshold                                                                                                                                                                                                        |                                                           |             |
| WARNING_INTERFACE_TRAFFIC_OUT  | Threshold                                                                                                                                                                                                        |                                                           |             |
| CRITICAL_INTERFACE_TRAFFIC_OUT | Threshold                                                                                                                                                                                                        |                                                           |             |
| EXTRA_OPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                 | --verbose                                                 |             |

</TabItem>
<TabItem value="Gateway-Memory" label="Gateway-Memory">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_MEMORY_USAGE       | Threshold in bytes                                                                                                                               |                   |             |
| CRITICAL_MEMORY_USAGE      | Threshold in bytes                                                                                                                               |                   |             |
| WARNING_MEMORY_USAGE_FREE  | Threshold in bytes                                                                                                                               |                   |             |
| CRITICAL_MEMORY_USAGE_FREE | Threshold in bytes                                                                                                                               |                   |             |
| WARNING_MEMORY_USAGE_PRCT  | Threshold in percentage                                                                                                                          | 80                |             |
| CRITICAL_MEMORY_USAGE_PRCT | Threshold in percentage                                                                                                                          | 90                |             |
| WARNING_SWAP_USAGE         | Threshold in bytes                                                                                                                               |                   |             |
| CRITICAL_SWAP_USAGE        | Threshold in bytes                                                                                                                               |                   |             |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Gateway-Status" label="Gateway-Status">

| Macro                        | Description                                                                                                                                                                                    | Valeur par défaut                          | Obligatoire |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|:-----------:|
| UNKNOWN_GATEWAY_STATUS       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`  |                                            |             |
| UNKNOWN_RUNNING_VERSION      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                       |                                            |             |
| UNKNOWN_GATEWAY_HEALTH       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                          |                                            |             |
| UNKNOWN_GATEWAY_VRRP_STATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                            |                                            |             |
| WARNING_GATEWAYS_DETECTED    | Threshold                                                                                                                                                                                      |                                            |             |
| CRITICAL_GATEWAYS_DETECTED   | Threshold                                                                                                                                                                                      |                                            |             |
| CRITICAL_GATEWAY_HEALTH      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                         | %\{healthColor\} !~ /green/                |             |
| WARNING_GATEWAY_HEALTH       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                          |                                            |             |
| CRITICAL_GATEWAY_STATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}` | %\{desiredState\} ne %\{operationalState\} |             |
| WARNING_GATEWAY_STATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`  |                                            |             |
| CRITICAL_GATEWAY_VRRP_STATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                           | %\{vrrpState\} =~ /fault/i                 |             |
| WARNING_GATEWAY_VRRP_STATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                            |                                            |             |
| WARNING_LAST_UPDATE_TIME     | Threshold                                                                                                                                                                                      |                                            |             |
| CRITICAL_LAST_UPDATE_TIME    | Threshold                                                                                                                                                                                      |                                            |             |
| WARNING_RUNNING_VERSION      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                       |                                            |             |
| CRITICAL_RUNNING_VERSION     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                      |                                            |             |
| EXTRA_OPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                               | --verbose                                  |             |

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
/usr/lib/centreon/plugins/centreon_zscaler_ztb_restapi.pl \
	--plugin=cloud::zscaler::ztb::restapi::plugin \
	--custommode=api \
	--mode=gateway-status \
	--login-domain='mycompany.zslogin.net' \
	--api-domain='mycompany-api.goairgap.com' \
	--client-id='XXXXXXXX' \
	--client-secret='XXXXXXXX' \
	--port='443' \
	--proto='https' \
	--include-gateway-id='^id8$' \
	--warning-gateways-detected='' \
	--critical-gateways-detected='' \
	--unknown-gateway-status='' \
	--warning-gateway-status='' \
	--critical-gateway-status='%{desiredState} ne %{operationalState}' \
	--unknown-running-version='' \
	--warning-running-version='' \
	--critical-running-version='' \
	--unknown-gateway-health='' \
	--warning-gateway-health='' \
	--critical-gateway-health='%{healthColor} !~ /green/' \
	--unknown-gateway-vrrp-status='' \
	--warning-gateway-vrrp-status='' \
	--critical-gateway-vrrp-status='%{vrrpState} =~ /fault/i' \
	--warning-last-update-time='' \
	--critical-last-update-time='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: gateway 'LOCATION_501' operational state: active [desired state: active], running version: 8.0.8P3a, last update: 8m 9s - health color: green - VRRP state: master | 'gateways.detected.count'=1;;;0; 'LOCATION_501#gateway.update.time.last.seconds'=489s;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_zscaler_ztb_restapi.pl \
	--plugin=cloud::zscaler::ztb::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                               | Modèle de service associé                             |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/cache.pm)]                              | Cloud-Zscaler-Ztb-Cache-Restapi-custom                |
| cluster-appconnector [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/clusterappconnector.pm)] | Cloud-Zscaler-Ztb-Cluster-Appconnector-Restapi-custom |
| cluster-ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/clusteripsec.pm)]               | Cloud-Zscaler-Ztb-Cluster-Ipsec-Restapi-custom        |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/discovery.pm)]                      | Utilisé pour la découverte d'hôtes                    |
| gateway-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaycontainers.pm)]     | Cloud-Zscaler-Ztb-Gateway-Containers-Restapi-custom   |
| gateway-cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaycpu.pm)]                   | Cloud-Zscaler-Ztb-Gateway-Cpu-Restapi-custom          |
| gateway-disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaydisk.pm)]                 | Cloud-Zscaler-Ztb-Gateway-Disk-Restapi-custom         |
| gateway-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewayinterfaces.pm)]     | Cloud-Zscaler-Ztb-Gateway-Interfaces-Restapi-custom   |
| gateway-memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaymemory.pm)]             | Cloud-Zscaler-Ztb-Gateway-Memory-Restapi-custom       |
| gateway-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/zscaler/ztb/restapi/mode/gatewaystatus.pm)]             | Cloud-Zscaler-Ztb-Gateway-Status-Restapi-custom       |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:-------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the `--show-password` option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage used perfdata into free: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                        |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage used perfdata into free: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                        |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage used perfdata into free: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                        |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach Common examples: Sum wrong packets from all interfaces (with interface, need --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\ |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --login-domain                             | Define the domain for OAuth2 authentication (example: `test.zslogin.net`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --api-domain                               | Define the domain for ZTB API (example: `mycompany-api.goairgap.com`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --client-id                                | Define client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --client-secret                            | Define client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --port                                     | Port used (default: `443`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proto                                    | Define `https` if needed (default: `https`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set timeout in seconds (default: `50`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-path                                 | Define the base path of the API endpoints (default: `/api`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --unknown-http-status                      | Define the conditions to match on the HTTP status for the returned status to be UNKNOWN (default: `%{http_code} < 200 or %{http_code} >= 300`). You can use the following variables: `%{http_code}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --warning-http-status                      | Define the conditions to match on the HTTP status for the returned status to be WARNING. You can use the following variables: `%{http_code}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --critical-http-status                     | Define the conditions to match on the HTTP status for the returned status to be CRITICAL. You can use the following variables: `%{http_code}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --cache-use                                | Use the cache file (created with `cache` mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --cache-lifetime                           | Define the cache lifetime before raising an error (default: `1800` seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cluster-Appconnector" label="Cluster-Appconnector">

| Option                            | Description                                                                                                                                                                                   |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-cluster-name            | Include cluster names (regexp).                                                                                                                                                               |
| --exclude-cluster-name            | Exclude cluster names (regexp).                                                                                                                                                               |
| --include-appconnector-name       | Include App Connector names (regexp).                                                                                                                                                         |
| --exclude-appconnector-name       | Exclude App Connector names (regexp).                                                                                                                                                         |
| --include-cluster-id              | Include cluster IDs (regexp).                                                                                                                                                                 |
| --exclude-cluster-id              | Exclude cluster IDs (regexp).                                                                                                                                                                 |
| --custom-perfdata-instances       | Define perfdata instance (default: `%(clusterName) %(appConnectorName)`) You can use the following variables: `%(clusterName)`, `%(appConnectorName)`                                         |
| --unknown-appconnector-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`                                        |
| --warning-appconnector-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}`                                        |
| --critical-appconnector-status    | Define the conditions to match for the status to be CRITICAL (default: `%{status} ne "connected"`). You can use the following variables: `%{clusterName}`, `%{appConnectorName}`, `%{status}` |
| --warning-appconnectors-detected  | Threshold.                                                                                                                                                                                    |
| --critical-appconnectors-detected | Threshold.                                                                                                                                                                                    |
| --warning-appconnector-running    | Threshold.                                                                                                                                                                                    |
| --critical-appconnector-running   | Threshold.                                                                                                                                                                                    |

</TabItem>
<TabItem value="Cluster-Ipsec" label="Cluster-Ipsec">

| Option                            | Description                                                                                                                                                                                     |
|:----------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-cluster-name            | Include cluster names (regexp).                                                                                                                                                                 |
| --exclude-cluster-name            | Exclude cluster names (regexp).                                                                                                                                                                 |
| --include-tunnel-name             | Include tunnel names (regexp).                                                                                                                                                                  |
| --exclude-tunnel-name             | Exclude tunnel names (regexp).                                                                                                                                                                  |
| --include-cluster-id              | Include cluster IDs (regexp).                                                                                                                                                                   |
| --exclude-cluster-id              | Exclude cluster IDs (regexp).                                                                                                                                                                   |
| --custom-perfdata-instances       | Define perfdata instance (default: `%(clusterName) %(tunnelName)`) You can use the following variables: `%(clusterName)`, `%(tunnelName)`                                                       |
| --unit                            | Select the time unit for refresh thresholds. May be `s` for seconds, `m` for minutes, `h` for hours, `d` for days, `w` for weeks (default: `s`).                                                |
| --unknown-sa-status               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`                                              |
| --warning-sa-status               | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`                                              |
| --critical-sa-status              | Define the conditions to match for the status to be CRITICAL (default: `%{saStatus} !~ /established/`). You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{saStatus}`   |
| --unknown-ike-status              | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`                                             |
| --warning-ike-status              | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}`                                             |
| --critical-ike-status             | Define the conditions to match for the status to be CRITICAL (default: `%{ikeStatus} !~ /established/`). You can use the following variables: `%{clusterName}`, `%{tunnelName}`, `%{ikeStatus}` |
| --warning-tunnels-ipsec-detected  | Threshold.                                                                                                                                                                                      |
| --critical-tunnels-ipsec-detected | Threshold.                                                                                                                                                                                      |
| --warning-last-refresh-time       | Threshold.                                                                                                                                                                                      |
| --critical-last-refresh-time      | Threshold.                                                                                                                                                                                      |

</TabItem>
<TabItem value="Gateway-Containers" label="Gateway-Containers">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-container-name             | Include container names (regexp).                                                                                                                                                    |
| --exclude-container-name             | Exclude container names (regexp).                                                                                                                                                    |
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName) %(containerName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`, `%(containerName)`     |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-memory-usage               | Threshold in bytes.                                                                                                                                                                  |
| --critical-memory-usage              | Threshold in bytes.                                                                                                                                                                  |
| --warning-cpu-utilization            | Threshold in percentage.                                                                                                                                                             |
| --critical-cpu-utilization           | Threshold in percentage.                                                                                                                                                             |

</TabItem>
<TabItem value="Gateway-Cpu" label="Gateway-Cpu">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                          |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-cpu-utilization            | Threshold in percentage.                                                                                                                                                             |
| --critical-cpu-utilization           | Threshold in percentage.                                                                                                                                                             |

</TabItem>
<TabItem value="Gateway-Disk" label="Gateway-Disk">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                          |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-disk-usage                 | Threshold in bytes.                                                                                                                                                                  |
| --critical-disk-usage                | Threshold in bytes.                                                                                                                                                                  |
| --warning-disk-usage-free            | Threshold in bytes.                                                                                                                                                                  |
| --critical-disk-usage-free           | Threshold in bytes.                                                                                                                                                                  |
| --warning-disk-usage-prct            | Threshold in percentage.                                                                                                                                                             |
| --critical-disk-usage-prct           | Threshold in percentage.                                                                                                                                                             |

</TabItem>
<TabItem value="Gateway-Interfaces" label="Gateway-Interfaces">

| Option                               | Description                                                                                                                                                                                                                                                                         |
|:-------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-interface-name             | Include interface names (regexp).                                                                                                                                                                                                                                                   |
| --exclude-interface-name             | Exclude interface names (regexp).                                                                                                                                                                                                                                                   |
| --include-site-name                  | Include site names (regexp).                                                                                                                                                                                                                                                        |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                                                                                                                        |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                                                                                                                     |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                                                                                                                     |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                                                                                                                     |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                                                                                                                     |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                                                                                                                       |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                                                                                                                       |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName) %(interfaceName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`, `%(interfaceName)`                                                                                                    |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`                                                                                                |
| --traffic-unit                       | Units of thresholds for the traffic (default: `percent_delta`) (`percent_delta`, `bps`, `counter`).                                                                                                                                                                                 |
| --speed                              | Set interface speed (in Mb).                                                                                                                                                                                                                                                        |
| --unknown-interface-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`                                                                     |
| --warning-interface-status           | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}`                                                                     |
| --critical-interface-status          | Define the conditions to match for the status to be CRITICAL (default: `%{adminState} =~ /up/ and %{operationalState} !~ /up/`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{interfaceName}`, `%{adminState}`, `%{operationalState}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-traffic-in       | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-traffic-in      | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-traffic-out      | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-traffic-out     | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-jitter           | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-jitter          | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-latency          | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-latency         | Threshold.                                                                                                                                                                                                                                                                          |
| --warning-interface-loss             | Threshold.                                                                                                                                                                                                                                                                          |
| --critical-interface-loss            | Threshold.                                                                                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Gateway-Memory" label="Gateway-Memory">

| Option                               | Description                                                                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                         |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                         |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                      |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                      |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                      |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                      |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                        |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                        |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                          |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}` |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                           |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                           |
| --warning-memory-usage               | Threshold in bytes.                                                                                                                                                                  |
| --critical-memory-usage              | Threshold in bytes.                                                                                                                                                                  |
| --warning-memory-usage-free          | Threshold in bytes.                                                                                                                                                                  |
| --critical-memory-usage-free         | Threshold in bytes.                                                                                                                                                                  |
| --warning-memory-usage-prct          | Threshold in percentage.                                                                                                                                                             |
| --critical-memory-usage-prct         | Threshold in percentage.                                                                                                                                                             |
| --warning-swap-usage                 | Threshold in bytes.                                                                                                                                                                  |
| --critical-swap-usage                | Threshold in bytes.                                                                                                                                                                  |

</TabItem>
<TabItem value="Gateway-Status" label="Gateway-Status">

| Option                               | Description                                                                                                                                                                                                                                        |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-site-name                  | Include site names (regexp).                                                                                                                                                                                                                       |
| --exclude-site-name                  | Exclude site names (regexp).                                                                                                                                                                                                                       |
| --include-cluster-name               | Include cluster names (regexp).                                                                                                                                                                                                                    |
| --exclude-cluster-name               | Exclude cluster names (regexp).                                                                                                                                                                                                                    |
| --include-gateway-name               | Include gateway names (regexp).                                                                                                                                                                                                                    |
| --exclude-gateway-name               | Exclude gateway names (regexp).                                                                                                                                                                                                                    |
| --include-gateway-id                 | Include gateway IDs (regexp).                                                                                                                                                                                                                      |
| --exclude-gateway-id                 | Exclude gateway IDs (regexp).                                                                                                                                                                                                                      |
| --custom-perfdata-instances          | Define perfdata instance (default: `%(gatewayName)`) You can use the following variables: `%(siteName)`, `%(clusterName)`, `%(gatewayName)`                                                                                                        |
| --custom-prefix-short-gateway-output | Define the prefix of each gateway in the short output (default: `gateway '%{gatewayName}' `). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`                                                               |
| --unit                               | Select the time unit for update thresholds. May be `s` for seconds, `m` for minutes, `h` for hours, `d` for days, `w` for weeks (default: `s`).                                                                                                    |
| --warning-gateways-detected          | Threshold.                                                                                                                                                                                                                                         |
| --critical-gateways-detected         | Threshold.                                                                                                                                                                                                                                         |
| --unknown-gateway-status             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`                                                      |
| --warning-gateway-status             | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}`                                                      |
| --critical-gateway-status            | Define the conditions to match for the status to be CRITICAL (default: `%{desiredState} ne %{operationalState}`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{desiredState}`, `%{operationalState}` |
| --unknown-running-version            | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                                                                           |
| --warning-running-version            | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                                                                           |
| --critical-running-version           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{runningVersion}`                                                                          |
| --unknown-gateway-health             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                                                                              |
| --warning-gateway-health             | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                                                                              |
| --critical-gateway-health            | Define the conditions to match for the status to be CRITICAL (default: `%{healthColor} !~ /green/`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{healthColor}`                                      |
| --unknown-gateway-vrrp-status        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                                                                                |
| --warning-gateway-vrrp-status        | Define the conditions to match for the status to be WARNING. You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                                                                                |
| --critical-gateway-vrrp-status       | Define the conditions to match for the status to be CRITICAL (default: `%{vrrpState} =~ /fault/i`). You can use the following variables: `%{siteName}`, `%{clusterName}`, `%{gatewayName}`, `%{vrrpState}`                                         |
| --warning-last-update-time           | Threshold.                                                                                                                                                                                                                                         |
| --critical-last-update-time          | Threshold.                                                                                                                                                                                                                                         |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_zscaler_ztb_restapi.pl \
	--plugin=cloud::zscaler::ztb::restapi::plugin \
	--custommode=api \
	--help
```

## Historique des modifications

- [26.10](../releases/release-notes.md#2026-10) - New connector: Initial release.
