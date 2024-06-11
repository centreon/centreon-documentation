---
id: cloud-azure-network-expressroute
title: Azure ExpressRoute
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Azure ExpressRoute** apporte un modèle d'hôte :

* Cloud-Azure-Network-ExpressRoute-custom

Il apporte les modèles de service suivants :

| Alias          | Modèle de service                                   | Description                                       | Défaut |
|:---------------|:----------------------------------------------------|:--------------------------------------------------|:-------|
| Circuit-Status | Cloud-Azure-Network-ExpressRoute-Circuit-Status-Api | Contrôle l'état du circuit                        | X      |
| Health         | Cloud-Azure-Network-ExpressRoute-Health-Api         | Contrôle le statut du circuit                     | X      |
| Traffic        | Cloud-Azure-Network-ExpressRoute-Traffic-Api        | Contrôle le traffic entrant et sortant du circuit | X      |

### Règles de découverte

Le connecteur de supervision Centreon **Azure ExpressRoute** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Express Routes**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-expressroute-provider.png)

> La découverte **Azure ExpressRoute** n'est compatible qu'avec le mode **api**. Le mode **azcli** n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Circuit-Status" label="Circuit-Status">

| Metric Name                         | Unit |
|:------------------------------------|:-----|
| Deployment status of the circuit    |      |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Unit |
|:------------|------|
| status      |      |
| summary     |      |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric Name                             | Unit  |
|:----------------------------------------|:------|
| azexpressroute.traffic.in.bitspersecond | b/s   |
| azexpressroute.traffic.in.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Express Route** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-ExpressRoute-Api
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure ExpressRoute** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Express Route** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-ExpressRoute-Api
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Azure ExpressRoute** :

```bash
yum install centreon-pack-cloud-azure-network-expressroute
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure ExpressRoute** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-Network-ExpressRoute-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des macros :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro *AZURERESOURCE*.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire | Macro              | Description                                    |
|:------------|:-------------------|:-----------------------------------------------|
|     x       | AZUREAPICUSTOMMODE | Custom mode **api**                            |
|     x       | AZURECLIENTID      | Client ID                                      |
|     x       | AZURECLIENTSECRET  | Client secret                                  |
|     x       | AZURERESOURCE      | ID or name of the Azure Express Route resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used   |
|     x       | AZURESUBSCRIPTION  | Subscription ID                                |
|     x       | AZURETENANT        | Tenant ID                                      |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Obligatoire | Macro              | Description                                    |
|:------------|:-------------------|:-----------------------------------------------|
|     x       | AZURECLICUSTOMMODE | Custom mode **azcli**                          |
|     x       | AZURERESOURCE      | ID or name of the Azure Express Route resource |
|     x       | AZURERESOURCEGROUP | Resource group name if resource name is used   |
|     x       | AZURESUBSCRIPTION  | Subscription ID                                |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_expressroute_api.pl \
    --plugin=cloud::azure::network::expressroute::plugin \
    --mode=traffic \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --filter-metric='' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Average' \
    --warning-traffic-in='' \
    --critical-traffic-out='' \
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Circuit '%s' Traffic In '%s'b/s Traffic Out '%s'b/s | 'azexpressroute.traffic.in.bitspersecond'=9000b/s;;;0; 'azexpressroute.traffic.in.bitspersecond'=9000b/s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_expressroute_api.pl \
    --plugin=cloud::azure::network::expressroute::plugin \
    --mode=traffic \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_expressroute_api.pl \
    --plugin=cloud::azure::network::expressroute::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.