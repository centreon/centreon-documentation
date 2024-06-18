---
id: cloud-azure-network-cdn
title: Azure CDN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Azure Content Delivery Network est une solution conçue pour les développeurs
pour rapidement distribuer du contenu tel que des images et vidéos ou autres
documents

Le connecteur de supervision Centreon *Azure CDN* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
CDN profile. Il est possible d'utiliser les 2 modes proposés par Microsoft: RestAPI ou Azure CLI.

## Contenu du Pack

### Objets supervisés

* Hit-Ratio 
* Latency
* Requests
* Response-Size

### Règles de découverte

Le connecteur de supervision Centreon *Azure CDN* inclut un *provider* de découverte
d'Hôtes nommé *Microsoft Azure CDNs**. Celui-ci permet de découvrir l'ensemble des instances
*Azure CDN* rattachées à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-cdn-provider.png)
> La découverte *Azure CDN* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation.

Vous trouverez plus d'informations sur la découverte d'Hôtes et son
fonctionnement sur la documentation du module:
[Découverte des hôtes](/onprem/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hit-Ratio" label="Hit-Ratio">

| Metric name             | Description    | Unit |
|:------------------------|:---------------|:-----|
| cdn.byte.hit.percentage | Byte Hit Ratio | %    |

</TabItem>
<TabItem value="Latency" label="Latency">

| Metric name                    | Description   | Unit |
|:-------------------------------|:--------------|:-----|
| cdn.latency.total.milliseconds | Total Latency | ms   |

</TabItem>
<TabItem value="Requests" label="Requests">

| Metric name                 | Description       | Unit  |
|:----------------------------|:------------------|:------|
| cdn.requests.count          | Request count     | count |
| cdn.requests.4xx.percentage | Percentage of 4XX | %     |
| cdn.requests.5xx.percentage | Percentage of 5XX | %     |

</TabItem>
<TabItem value="Response-Size" label="Response-Size">

| Metric name             | Description   | Unit |
|:------------------------|:--------------|:-----|
| cdn.response.size.bytes | Response Size | B    |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources*Azure CDN*:

```bash
yum install centreon-plugin-Cloud-Azure-Network-CDN-Api
```

2. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Azure CDN* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources*Azure CDN*:

```bash
yum install centreon-plugin-Cloud-Azure-Network-CDN-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Azure CDN*:

```bash
yum install centreon-pack-cloud-azure-network-cdn
```

3. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Azure CDN* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Network-CDN-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des Macros:
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.EventHub/<resource_type>/<resource_name>`)
dans la Macro *AZURERESOURCE*
> * Utilisation du nom de la ressource dans la Macro *AZURERESOURCE* associée à la Macro *AZURERESOURCEGROUP* 

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'api'                                  |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURETENANT        | Tenant ID                                          |
| X         | AZURECLIENTID      | Client ID                                          |
| X         | AZURECLIENTSECRET  | Client secret                                      |
| X         | AZURERESOURCE      | ID or name of the CDN profile resource             |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the CDN profile resource             |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
 /usr/lib/centreon/plugins//centreon_azure_network_cdn_api.pl   \
    --plugin=cloud::azure::network::cdn::plugin  \
    --mode=requests  \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='CDN001ABCD' \
    --resource-group='RSG1234'
    --aggregation='Total' \
    --timeframe='900' \
    --interval='PT5M' \
    --warning-requests-count='800'  \
    --critical-requests-count='900'
 ```

 La commande devrait retourner un message de sortie similaire à :

```bash
OK : Instance 'CDN001ABCD' Statistic 'count' Request count: 12.00, Percentage of 4XX: 0.00, Percentage of 5XX: 0.00 |
'CDN001ABCD~cdn.requests.count'=12;800;900;0; 'CDN001ABCD~cdn.requests.4xx.percentage'=0.00%;;;0; 'CDN001ABCD~cdn.requests.5xx.percentage'=0.00%;;;0; 
 ```

La commande ci-dessus vérifie le nombre de requêtes sur l'instance *CDN profiles* nommée *CDN001ABCD*
(`--plugin=cloud::azure::network::cdn::plugin --mode=requests --resource='CDN001ABCD'`) et liée au *Resource Group* *RSG1234*
(`--resource-group='RSG1234'`).

Le mode de connexion utilisé est 'api' (`--custommode=api`), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (`--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'`).

Les statuts caculés se baseront sur les valeurs totales d'un échantillon dans un intervalle de 15 minutes / 900 secondes  (`--timeframe='900'`) 
avec un état retourné par tranche de 5 minutes (`--interval='PT5M'`).

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre de requêtes pendant l'intervalle donné
est supérieur à 800 (`--warning-requests-count='800'`); l'alarme sera de type CRITICAL au-delà de 900 requêtes
(`--critical-requests-count='900'`).

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_azure_network_cdn_api.pl   \
    --plugin=cloud::azure::network::cdn::plugin  \
    --mode=requests  \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoute le paramètre 
`--list-mode` à la commande:

```bash
 /usr/lib/centreon/plugins//centreon_azure_network_cdn_api.pl   \
    --plugin=cloud::azure::network::cdn::plugin  \
    --list-mode
 ```

### Diagnostic des erreurs communes  

#### Les identifiants ont changé et mon Plugin ne fonctionne plus

Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas 
se ré-authentifier à chaque appel. Si des informations sur le Tenant, la Souscription ou les 
Client ID / Secret changent, il est nécessaire de supprimer le fichier de cache du Plugin. 

Celui ci se trouve dans le répertoire `/var/lib/centreon/centplugins/` avec le nom azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### `UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)`

Lors du déploiement de mes contrôles, j'obtiens le message suivant : 
`UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)`.

Cela signifie que l'un des paramètres utilisés pour authentifier la requête est incorrect. Le paramètre 
en question est spécifié dans le message d'erreur en lieu et place de 'ERROR_DESC'. 

Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret
n'est (ne sont) pas valide(s).

#### `UNKNOWN: 500 Can't connect to login.microsoftonline.com:443`

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option `--proxyurl='http://proxy.mycompany.com:8080'`.

Il est également possible qu'un équipement tiers de type Pare-feu bloque la requête
effectuée par le Plugin.

#### `UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values`

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Azure n'a pas consolidé de données sur la période.

Vous pouvez ajouter `--zeroed` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.
