---
id: cloud-azure-network-virtualnetwork
title: Azure Virtual Network
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Azure Virtual Network** apporte un modèle d'hôte :

* Cloud-Azure-Network-VirtualNetwork-custom

Il apporte le modèle de service suivant :

| Alias           | Modèle de service                                      | Description               | Défaut |
|:----------------|:-------------------------------------------------------|:--------------------------|:-------|
| Peerings-Status | Cloud-Azure-Network-VirtualNetwork-Peerings-Status-Api | Contrôle l'état des pairs | X      |

### Règles de découverte

Le connecteur de supervision Centreon **Azure Virtual Network** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Virtual Networks**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-virtualnetwork-provider.png)

> La découverte **Azure Virtual Network** n'est compatible qu'avec le mode **api**. Le mode **azcli** n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Peerings-Status" label="Peerings-Status">

@TODO_MIGRATION_V2@

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Virtual Network** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-VirtualNetwork-Api
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure Virtual Network** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Virtual Network** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-VirtualNetwork-Api
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Azure Virtual Network** :

```bash
yum install centreon-pack-cloud-azure-network-virtualnetwork
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure Virtual Network** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-Network-VirtualNetwork-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des macros :

>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro *AZURERESOURCE*.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
|     x       | AZUREAPICUSTOMMODE | Custom mode **api**                              |
|     x       | AZURECLIENTID      | Client ID                                        |
|     x       | AZURECLIENTSECRET  | Client secret                                    |
|     x       | AZURERESOURCE      | ID or name of the Azure Virtual Network resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|     x       | AZURESUBSCRIPTION  | Subscription ID                                  |
|     x       | AZURETENANT        | Tenant ID                                        |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Obligatoire | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
|     x       | AZURECLICUSTOMMODE | Custom mode **azcli**                            |
|     x       | AZURERESOURCE      | ID or name of the Azure Virtual Network resource |
|     x       | AZURERESOURCEGROUP | Resource group name if resource name is used     |
|     x       | AZURESUBSCRIPTION  | Subscription ID                                  |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_virtualnetwork_api.pl \
    --plugin=cloud::azure::network::virtualnetwork::plugin \
    --mode=peerings-status \
    --custommode='api' \
    --resource='VNET001A' \
    --resource-group='RSG1234' \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --proxyurl='' \
    --filter-name='' \
    --warning-status='' \
    --critical-status='%{peering_state} ne "Connected" || %{provisioning_state} ne "Succeeded"' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: State '%s', Provisioning State '%s' [Peer: '%s'] | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_virtualnetwork_api.pl \
    --plugin=cloud::azure::network::virtualnetwork::plugin \
    --mode=peerings-status \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_virtualnetwork_api.pl \
    --plugin=cloud::azure::network::virtualnetwork::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.