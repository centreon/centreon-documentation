---
id: cloud-azure-network-vpngateway
title: Azure VPN Gateway
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Azure VPN Gateway** apporte un modèle d'hôte :

* Cloud-Azure-Network-VpnGateway-custom

Il apporte les modèles de service suivants :

| Alias              | Modèle de service                                     | Description                                               | Défaut |
|:-------------------|:------------------------------------------------------|:----------------------------------------------------------|:-------|
| Health             | Cloud-Azure-Network-VpnGateway-Health-Api             | Contrôle le statut de la passerelle VPN                   | X      |
| Site-Traffic       | Cloud-Azure-Network-VpnGateway-Site-Traffic-Api       | Contrôle le trafic entrant et sortant du site             | X      |
| Tunnel-Traffic     | Cloud-Azure-Network-VpnGateway-Tunnel-Traffic-Api     | Contrôle le trafic entrant et sortant du tunnel           | X      |
| Vpn-Gateway-Status | Cloud-Azure-Network-VpnGateway-Vpn-Gateway-Status-Api | Contrôle le statut du provisionement de la passerelle VPN | X      |

### Règles de découverte

Le connecteur de supervision Centreon **Azure VPN Gateway** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure VPN Gateways**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-vpngateway-provider.png)

> La découverte **Azure VPN Gateway** n'est compatible qu'avec le mode **api**. Le mode **azcli** n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Site-Traffic" label="Site-Traffic">

| Metric Name                                        | Unit  |
|:---------------------------------------------------|:------|
| azvpngateway.site.traffic.bandwidth.bytespersecond | B     |
| azvpngateway.p2s.traffic.bandwidth.bytespersecond  | B     |
| azvpngateway.p2s.connections.count                 |       |

</TabItem>
<TabItem value="Tunnel-Traffic" label="Tunnel-Traffic">

| Metric Name                                   | Unit  |
|:----------------------------------------------|:------|
| azvpngateway.tunnel.dropped.packets.in.count  |       |
| azvpngateway.tunnel.dropped.packets.out.count |       |
| azvpngateway.tunnel.packets.in.count          |       |
| azvpngateway.tunnel.packets.out.count         |       |
| azvpngateway.tunnel.ingress.bytes             | B     |
| azvpngateway.tunnel.egress.bytes              | B     |

</TabItem>
<TabItem value="Vpn-Gateway-Status" label="Vpn-Gateway-Status">

| Status Name  | Unit  |
|:-------------|:------|
| status       |       |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure VPN Gateway** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-VpnGateway-Api
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure VPN Gateway** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure VPN Gateway** :

```bash
yum install centreon-plugin-Cloud-Azure-Network-VpnGateway-Api
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Azure VPN Gateway** :

```bash
yum install centreon-pack-cloud-azure-network-vpngateway
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure VPN Gateway** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-Network-VpnGateway-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des macros :

>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro *AZURERESOURCE*.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire | Macro              | Description                                  |
|:------------|:-------------------|:---------------------------------------------|
|      x      | AZUREAPICUSTOMMODE | Custom mode **api**                          |
|      x      | AZURECLIENTID      | Client ID                                    |
|      x      | AZURECLIENTSECRET  | Client secret                                |
|      x      | AZURERESOURCE      | ID or name of the Azure VPN Gateway resource |
|             | AZURERESOURCEGROUP | Resource group name if resource name is used |
|      x      | AZURESUBSCRIPTION  | Subscription ID                              |
|      x      | AZURETENANT        | Tenant ID                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Obligatoire | Macro              | Description                                  |
|:------------|:-------------------|:---------------------------------------------|
|     x       | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|     x       | AZURERESOURCE      | ID or name of the Azure VPN Gateway resource |
|     x       | AZURERESOURCEGROUP | Resource group name if resource name is used |
|     x       | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \
    --plugin=cloud::azure::network::vpngateway::plugin \
    --mode=health \
    --custommode='api' \
    --resource='' \
    --resource-group='' \
    --subscription='' \
    --tenant='' \
    --client-id='' \
    --client-secret='' \
    --proxyurl='' \
    --ok-status='%{status} =~ /^Available$/' \
    --warning-status='' \
    --critical-status='%{status} =~ /^Unavailable$/' \
    --unknown-status='%{status} =~ /^Unknown$/' \
    --api-version=2017-07-01\
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: VPN Gateway '%s' Provisioning State '%s' [Gateway type: '%s'] [VPN type: '%s'] | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \
    --plugin=cloud::azure::network::vpngateway::plugin \
    --mode=site-traffic \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_network_vpngateway_api.pl \
    --plugin=cloud::azure::network::vpngateway::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.