---
id: cloud-azure-database-cosmosdb
title: Azure Cosmos DB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Azure Cosmos DB est une base de données NoSQL complètement managée pour le développement d’applications modernes. Les temps de
réponse inférieurs à dix millisecondes et la scalabilité automatique et instantanée garantissent une vitesse, quelle que soit l’échelle. 

Le Plugin Pack Centreon *Azure Cosmos DB* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
Cosmos DB. Il est possible d'utiliser les 2 modes proposés par Microsoft: RestAPI ou Azure CLI.

## Contenu du Pack

### Objets supervisés

* Comptes Azure *Cosmos DB*
    * Availability
    * Cache
    * Document
    * Health
    * Latency
    * Throughput
    * Units
    * Usage

### Règles de découverte

Le Plugin Pack Centreon *Azure Cosmos DB* inclut un *provider* de découverte d'Hôtes nommé **Microsoft Azure Cosmos DB Account**.
Celui-ci permet de découvrir l'ensemble des comptes *Cosmos DB* rattachés à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-database-cosmosdb-provider.png)

> La découverte *Azure Cosmos DB* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation. 

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés 

<Tabs groupId="sync">
<TabItem value="Availability" label="Availability">

| Metric Name                                      | Description          | Unit |
|:-------------------------------------------------|:---------------------|:-----|
| cosmosdb.account.service.availability.percentage | Service Availability | %    |

</TabItem>
<TabItem value="Cache" label="Cache">

| Metric Name                                          | Description                           | Unit  |
|:-----------------------------------------------------|:--------------------------------------|:------|
| cosmosdb.account.integratedcache.evicted.size.bytes  | Integrated Cache Evicted Entries Size | B     |
| cosmosdb.account.integratedcache.hitrate.percentage  | Integrated Cache Hit Rate             | %     |
| cosmosdb.account.integratedcache.size.bytes          | Integrated Cache Size                 | B     |
| cosmosdb.account.integratedcache.ttlexpiration.count | Integrated Cache TTL Expiration Count | Count |


</TabItem>
<TabItem value="Document" label="Document">

| Metric Name                           | Description    | Unit  |
|:--------------------------------------|:---------------|:------|
| cosmosdb.account.document.count       | Document Count | Count |
| cosmosdb.account.document.quota.bytes | Document Quota | B     |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Latency" label="Latency">

| Metric Name                                       | Description             | Unit |
|:--------------------------------------------------|:------------------------|:-----|
| cosmosdb.account.latency.replication.milliseconds | P99 Replication Latency | ms   |
| cosmosdb.account.latency.serverside.milliseconds  | Server Side Latency     | ms   |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Metric Name                                  | Description              | Unit  |
|:---------------------------------------------|:-------------------------|:------|
| cosmosdb.account.troughput.autoscale.count   | Autoscale Max Throughput | Count |
| cosmosdb.account.troughput.provisioned.count | Provisioned Throughput   | Count |

</TabItem>
<TabItem value="Units" label="Units">

| Metric Name                               | Description         | Unit  |
|:------------------------------------------|:--------------------|:------|
| cosmosdb.account.requestunits.total.count | Total Request Units | Count |

</TabItem>
<TabItem value="Usage" label="Usage">

| Metric Name                        | Description | Unit |
|:-----------------------------------|:------------|:-----|
| cosmosdb.account.data.usage.bytes  | Data Usage  | B    |
| cosmosdb.account.index.usage.bytes | Index Usage | B    |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Cosmos DB:

```bash
yum install centreon-plugin-Cloud-Azure-Database-CosmosDb-Api
```

2. Sur l'interface Integration de Centreon, installer le Plugin-Pack *Azure Cosmos DB* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Cosmos DB:

```bash
yum install centreon-plugin-Cloud-Azure-Database-CosmosDb-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Azure Cosmos DB*:

```bash
yum install centreon-pack-cloud-azure-database-cosmosdb.noarch
```

3. Sur l'interface Integration de Centreon, installer le Plugin-Pack *Azure Cosmos DB* depuis la page "Configuration > Plugin Packs > Gestionnaire"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Database-CosmosDb-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des Macros:
> * Utilisation de l'ID complet de la ressource (de type ```/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.DocumentDB/databaseAccounts/<resource_name>```)
dans la Macro *AZURERESOURCE*
> * Utilisation du nom de la ressource dans la Macro *AZURERESOURCE* associée aux Macros *AZURERESOURCEGROUP* et *AZURERESOURCETYPE*

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'api'                                  |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURETENANT        | Tenant ID                                          |
| X         | AZURECLIENTID      | Client ID                                          |
| X         | AZURECLIENTSECRET  | Client secret                                      |
| X         | AZURERESOURCE      | ID or name of the Cosmos DB account                |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
|           | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the Cosmos DB account                |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
|           | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en
vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_cosmosdb_api.pl \
    --plugin=cloud::azure::database::cosmosdb::plugin \
    --mode=latency \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='DB001ABCD' \
    --resource-group='RSG1234' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Average' \
    --warning-serverside-latency='800' \
    --critical-serverside-latency='900'
```

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Instance 'DB001ABCD' Statistic 'average' Metrics Server Side Latency: 0.00ms, P99 Replication Latency: 0.00ms |
'DB001ABCD~average#cosmosdb.account.latency.serverside.milliseconds'=0.00ms;0:800;0:900;0; 'DB001ABCD~average#cosmosdb.account.latency.replication.milliseconds'=0.00ms;;;0;
```

La commande ci-dessus vérifie les statistiques de *latence* du compte *Cosmos DB* nommé *DB001ABCD*
(```--plugin=cloud::azure::database::cosmosdb::plugin --mode=latency --resource='DB001ABCD'```) et lié au *Resource Group* *RSG1234*
(```--resource-group='RSG1234'```).

Le mode de connexion utilisé est 'api' (```--custommode=api```), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

Les statuts caculés se baseront sur les valeurs moyennes (```--aggregation='Average'```) d'un échantillon dans un intervalle de
15 minutes / 900 secondes  (```--timeframe='900'```) avec un état retourné par tranche de 5 minutes (```--interval='PT5M'```).

Dans cet exemple, une alarme de type WARNING sera déclenchée si la *latence* constatée pendant l'intervalle donné
est supérieure à 800ms (```--warning-serverside-latency='800'```); l'alarme sera de type CRITICAL au-delà de 900ms 
(```--critical-serverside-latency='900'```).

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ```--help```
à la commande:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_cosmosdb_api.pl \
    --plugin=cloud::azure::database::cosmosdb::plugin \
    --mode=latency \
    --help
```

### Diagnostic des erreurs communes  

#### Les identifiants ont changé et mon Plugin ne fonctionne plus

Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas 
se ré-authentifier à chaque appel. Si des informations sur le Tenant, la Souscription ou les 
Client ID / Secret changent, il est nécessaire de supprimer le fichier de cache du Plugin. 

Celui ci se trouve dans le répertoire ```/var/lib/centreon/centplugins/``` avec le nom azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

Cette erreur signifie que l'un des paramètres utilisés pour authentifier la requête est incorrect. Le paramètre 
en question est spécifié dans le message d'erreur en lieu et place de 'ERROR_DESC'. 

Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret
n'est (ne sont) pas valide(s).

#### ```UNKNOWN: 500 Can't connect to login.microsoftonline.com:443```

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

Il est également possible qu'un équipement tiers de type Pare-feu bloque la requête
effectuée par le Plugin.

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Azure n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.
