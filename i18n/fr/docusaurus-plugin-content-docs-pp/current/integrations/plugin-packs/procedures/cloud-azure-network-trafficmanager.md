---
id: cloud-azure-network-trafficmanager
title: Azure Traffic Manager
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Azure Traffic Manager** apporte 2 modèles d'hôte différents :

* Cloud-Azure-Network-TrafficManager-custom
* generic-dummy-host-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                                     | Description                                                                                    | Défaut |
|:----------------|:------------------------------------------------------|:-----------------------------------------------------------------------------------------------|:-------|
| Endpoint-Status | Cloud-Azure-Network-TrafficManager-EndpointStatus-Api | Contrôle le statut des Endpoints pour un Profile Azure Traffic Manager                         | X      |
| Health          | Cloud-Azure-Network-TrafficManager-Health-Api         | Contrôle de la disponibilité du Profile Traffic Manager                                        | X      |
| Queries         | Cloud-Azure-Network-TrafficManager-Queries-Api        | Contrôle le nombre de requêtes par secondes par Endpoint pour un Profile Azure Traffic Manager | X      |

### Règles de découverte

Le Plugin Pack Centreon **Azure Traffic Manager** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Traffic Manager Profiles**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-trafficmanager-provider.png)

> La découverte **Azure Traffic Manager** n'est compatible qu'avec le mode **api**. Le mode **azcli** n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Endpoint-Status" label="Endpoint-Status">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| trafficmanager.endpoint.status.count |       |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique    | Unité |
|:------------|:------|
| status      |       |

</TabItem>
<TabItem value="Queries" label="Queries">

| Métrique                         | Unité |
|:---------------------------------|:------|
| trafficmanager.queries.persecond |       |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Traffic Manager** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-TrafficManager-Api
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Azure Traffic Manager** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Traffic Manager** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-TrafficManager-Api
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Azure Traffic Manager** :

```bash
yum install centreon-pack-cloud-azure-network-trafficmanager
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Azure Traffic Manager** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-Network-TrafficManager-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des macros :

>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro *AZURERESOURCE*.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
| X           | AZUREAPICUSTOMMODE | Custom mode **api**                              |
| X           | AZURECLIENTID      | Client ID                                        |
| X           | AZURECLIENTSECRET  | Client secret                                    |
| X           | AZURERESOURCE      | ID or name of the Azure Traffic Manager resource |
| X           | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|             | AZURESUBSCRIPTION  | Subscription ID                                  |
| X           | AZURETENANT        | Tenant ID                                        |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Obligatoire | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
| X           | AZURECLICUSTOMMODE | Custom mode **azcli**                            |
| X           | AZURERESOURCE      | ID or name of the Azure Traffic Manager resource |
| X           | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|             | AZURESUBSCRIPTION  | Subscription ID                                  |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_trafficmanager_api.pl \
    --plugin=cloud::azure::network::trafficmanager::plugin \
    --mode=queries \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --filter-metric='' \
    --filter-dimension='' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Total' \
    --warning-queries-persecond='' \
    --critical-queries-persecond='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Queries per second By Endpoint : 9000 | 'trafficmanager.queries.persecond'=9000;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_trafficmanager_api.pl \
    --plugin=cloud::azure::network::trafficmanager::plugin \
    --mode=queries \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_trafficmanager_api.pl \
    --plugin=cloud::azure::network::trafficmanager::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.