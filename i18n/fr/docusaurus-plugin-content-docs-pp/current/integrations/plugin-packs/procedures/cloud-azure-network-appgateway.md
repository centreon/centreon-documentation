---
id: cloud-azure-network-appgateway
title: Azure Application Gateway
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Azure Application Gateway** apporte 2 modèles d'hôte différents :

* Cloud-Azure-Network-AppGateway-V2-custom
* Cloud-Azure-Network-AppGateway-V1-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                                  | Description                                                               | Défaut |
|:----------------|:---------------------------------------------------|:--------------------------------------------------------------------------|:-------|
| Backend-Health  | Cloud-Azure-Network-AppGateway-Backend-Health-Api  | Contrôle la disponibilité des hôtes backends Azure Application Gateway v1 | X      |
| Backend-Status  | Cloud-Azure-Network-AppGateway-Backend-Status-Api  | Contrôle le statut des backends Azure Application Gateway                 | X      |
| Backend-Time    | Cloud-Azure-Network-AppGateway-Backend-Time-Api    | Contrôle le temps de réponse des backends Azure Application Gateway       | X      |
| Clients-Traffic | Cloud-Azure-Network-AppGateway-Clients-Traffic-Api | Contrôle le trafic client des ressources Azure Application Gateway        | X      |
| Connections     | Cloud-Azure-Network-AppGateway-Connections-Api     | Contrôle les connexions aux ressources Azure Application Gateway          | X      |
| Gateway-Time    | Cloud-Azure-Network-AppGateway-Gateway-Time-Api    | Contrôle le temps de réponse des ressources Azure Application Gateway     | X      |
| Health          | Cloud-Azure-Network-AppGateway-Health-Api          | Contrôle la santé des ressources Azure Application Gateway                | X      |
| Requests        | Cloud-Azure-Network-AppGateway-Requests-Api        | Contrôle les requêtes des ressources Azure Application Gateway            | X      |
| Throughput      | Cloud-Azure-Network-AppGateway-Throughput-Api      | Contrôle le transit des ressources Azure Application Gateway              | X      |
| Units           | Cloud-Azure-Network-AppGateway-Units-Api           | Contrôle les unités des ressources Azure Application Gateway              | X      |



> Les services par "Défaut" sont automatiquement liés au(x) modèle(s) d'hôte.

### Règles de découverte

Le Plugin Pack Centreon **Azure Application Gateway** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Application Gateways**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-network-appgateway-provider.png)

> La découverte **Azure Application Gateway** n'est compatible qu'avec le mode **api**. Le mode **azcli** n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| appgateway.backend.healthy.host.count   | count |
| appgateway.backend.unhealthy.host.count | count |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| appgateway.backend.response.status.count | count |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Métrique                                               | Unité |
|:-------------------------------------------------------|:------|
| appgateway.backend.connect.time.milliseconds           | ms    |
| appgateway.backend.firstbyte.responsetime.milliseconds | ms    |
| appgateway.backend.lastbyte.responsetime.milliseconds  | ms    |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| appgateway.traffic.clients.received.bytes | B     |
| appgateway.traffic.clients.sent.bytes     | B     |

</TabItem>
<TabItem value="Connections" label="Connections">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| appgateway.backend.connections.current.count | count |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| appgateway.time.total.milliseconds | ms    |

</TabItem>
<TabItem value="Health" label="Health">

Could not retrive metrics

</TabItem>
<TabItem value="Requests" label="Requests">

| Métrique                         | Unité |
|:---------------------------------|:------|
| appgateway.requests.failed.count | count |
| appgateway.requests.total.count  | count |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| appgateway.throughput.bytespersecond | B/s   |

</TabItem>
<TabItem value="Units" label="Units">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| appgateway.capacity.units.count         | count |
| appgateway.compute.units.count          | count |
| appgateway.billed.units.estimated.count | count |
| appgateway.billable.units.fixed.count   | count |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-network-appgateway
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Azure Application Gateway**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Network-AppGateway-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-network-appgateway-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-Network-AppGateway-V2-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des macros :

>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro *AZURERESOURCE*.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire    | Macro              | Description                                  |
|:---------------|:-------------------|:---------------------------------------------|
|                | AZUREAPICUSTOMMODE | Custom mode **api**                          |
|                | AZURECLIENTID      | Client ID                                    |
|                | AZURECLIENTSECRET  | Client secret                                |
|                | AZURERESOURCE      | ID or name of the Azure resource             |
|                | AZURERESOURCEGROUP | Resource group name if resource name is used |
|                | AZURESUBSCRIPTION  | Subscription ID                              |
|                | AZURETENANT        | Tenant ID                                    |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Obligatoire    | Macro              | Description                                  |
|:---------------|:-------------------|:---------------------------------------------|
|                | AZURECLICUSTOMMODE | Custom mode **azcli**                        |
|                | AZURERESOURCE      | ID or name of the Azure resource             |
|                | AZURERESOURCEGROUP | Resource group name if resource name is used |
|                | AZURESUBSCRIPTION  | Subscription ID                              |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
usr/lib/centreon/plugins//centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --mode=units \
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
    --aggregation='Average' \
    --warning-estimated-billed-units='' \
    --critical-estimated-billed-units='' \
    --warning-fixed-billable-units='' \
    --critical-fixed-billable-units='' \
    --warning-compute-units='' \
    --critical-compute-units='' \
    --warning-capacity-units='' \
    --critical-capacity-units='' \
    
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Capacity Units consumed Compute Units consumed Estimated Billed Capacity Units Fixed Billable Capacity Units | 'appgateway.capacity.units.count'=85;;;0; 'appgateway.compute.units.count'=74;;;0; 'appgateway.billed.units.estimated.count'=10;;;0; 'appgateway.billable.units.fixed.count'=72;;;0; 
```

### Custom modes disponibles

Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
usr/lib/centreon/plugins//centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --list-custommode
```

Le plugin apporte les custom modes suivants :

* api
* azcli

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
usr/lib/centreon/plugins//centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

* backend-health
* backend-status
* backend-time
* clients-traffic
* connections
* discovery
* gateway-time
* health
* requests
* throughput
* units

### Options complémentaires

#### Options globales

Les options globales aux modes sont listées ci-dessus :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --custommode                               |     Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --list-custommode                          |     List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global      |
| --multiple                                 |     Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |


#### Options des custom modes

Les options spécifiques aux modes custom sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                | Option type  |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --subscription         |     Set Azure subscription ID.                                                                                                             | Api          |
| --tenant               |     Set Azure tenant ID.                                                                                                                   | Api          |
| --client-id            |     Set Azure client ID.                                                                                                                   | Api          |
| --client-secret        |     Set Azure client secret.                                                                                                               | Api          |
| --login-endpoint       |     Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                            | Api          |
| --management-endpoint  |     Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                            | Api          |
| --timeframe            |     Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               | Api          |
| --interval             |     Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        | Api          |
| --aggregation          |     Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').                                  | Api          |
| --zeroed               |     Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.                                           | Api          |
| --timeout              |     Set timeout in seconds (Default: 10).                                                                                                  | Api          |
| --http-peer-addr       |     Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                | Http global  |
| --proxyurl             |     Proxy URL                                                                                                                              | Http global  |
| --proxypac             |     Proxy pac file (can be an url or local file)                                                                                           | Http global  |
| --insecure             |     Insecure SSL connections.                                                                                                              | Http global  |
| --http-backend         |     Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                    | Http global  |
| --ssl-opt              |     Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                              | Backend lwp  |
| --ssl                  |     Set SSL version (--ssl=TLSv1).                                                                                                         | Backend lwp  |
| --curl-opt             |     Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).       | Backend curl |
| --memcached            |     Memcached server to use (only one server).                                                                                             | Retention    |
| --redis-server         |     Redis server to use (only one server). SYntax: address\[:port\]                                                                        | Retention    |
| --redis-attribute      |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                | Retention    |
| --redis-db             |     Set Redis database index.                                                                                                              | Retention    |
| --failback-file        |     Failback on a local file if redis connection failed.                                                                                   | Retention    |
| --memexpiration        |     Time to keep data in seconds (Default: 86400).                                                                                         | Retention    |
| --statefile-dir        |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                    | Retention    |
| --statefile-suffix     |     Add a suffix for the statefile name (Default: '').                                                                                     | Retention    |
| --statefile-concat-cwd |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                             | Retention    |
| --statefile-format     |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                     | Retention    |
| --statefile-key        |     Key to encrypt/decrypt cache.                                                                                                          | Retention    |
| --statefile-cipher     |     Cipher to encrypt cache (Default: 'AES').                                                                                              | Retention    |
| --filter-dimension     |     Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode  |
| --per-sec              |     Display the statistics based on a per-second period.                                                                                   | Custom mode  |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                                | Option type |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --subscription     |     Set Azure subscription (Required if logged to several subscriptions).                                                                  | Azcli       |
| --timeframe        |     Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               | Azcli       |
| --interval         |     Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        | Azcli       |
| --aggregation      |     Set monitor aggregation (Can be multiple, Can be: 'minimum', 'maximum', 'average', 'total', 'count').                                  | Azcli       |
| --zeroed           |     Set metrics value to 0 if none. Usefull when Monitor does not return value when not defined.                                           | Azcli       |
| --timeout          |     Set timeout in seconds (Default: 50).                                                                                                  | Azcli       |
| --sudo             |     Use 'sudo' to execute the command.                                                                                                     | Azcli       |
| --command          |     Command to get information (Default: 'az'). Can be changed if you have output in a file.                                               | Azcli       |
| --command-path     |     Command path (Default: none).                                                                                                          | Azcli       |
| --command-options  |     Command options (Default: none).                                                                                                       | Azcli       |
| --proxyurl         |     Proxy URL if any                                                                                                                       | Azcli       |
| --filter-dimension |     Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   | Custom mode |
| --per-sec          |     Display the statistics based on a per-second period.                                                                                   | Custom mode |

</TabItem>
</Tabs>

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Backend-Health" label="Backend-Health">

| Option                          | Description                                                                                     | Option type |
|:--------------------------------|:------------------------------------------------------------------------------------------------|:------------|
| --resource                      |     Set resource name or id (Required).                                                         | Mode        |
| --critical-unhealthy-host-count |     ='2'     Default aggregation: 'average' / 'total', 'minimum' and 'maximum' are     valid.   | Mode        |
| --resource-group                |     Set resource group (Required if resource's name is used).                                   | Mode        |
| --warning-*                     |     Warning threshold where '*' can be: 'healthyhostcount', 'unhealthyhostcount'.               | Mode        |
| --critical-*                    |     Critical threshold where '*' can be: 'healthyhostcount', 'unhealthyhostcount'.              | Mode        |

</TabItem>
<TabItem value="Backend-Status" label="Backend-Status">

| Option                     | Description                                                     | Option type |
|:---------------------------|:----------------------------------------------------------------|:------------|
| --plugin                   |     =cloud::azure::integration::servicebus::plugin              | Mode        |
| --resource                 |     Set resource name or id (Required).                         | Mode        |
| --critical-response-status |     Critical threshold.                                         | Mode        |
| --resource-group           |     Set resource group (Required if resource's name is used).   | Mode        |
| --warning-response-status  |     Warning threshold.                                          | Mode        |

</TabItem>
<TabItem value="Backend-Time" label="Backend-Time">

| Option                            | Description                                                                                                      | Option type |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------|:------------|
| --warning-lastbyte-response-time  |     ='1000'                                                                                                      | Mode        |
| --critical-lastbyte-response-time |     ='2000'     Default aggregation: 'average' / 'total', 'minimum' and 'maximum' are     valid.                 | Mode        |
| --plugin                          |     =cloud::azure::integration::servicebus::plugin                                                               | Mode        |
| --resource                        |     Set resource name or id (Required).                                                                          | Mode        |
| --resource-group                  |     Set resource group (Required if resource's name is used).                                                    | Mode        |
| --warning-*                       |     Warning threshold where '*' can be: 'connect-time', 'lastbyte-response-time', 'firstbyte-response-time'.     | Mode        |
| --critical-*                      |     Critical threshold where '*' can be: 'connect-time', 'lastbyte-response-time', 'firstbyte-response-time'.    | Mode        |

</TabItem>
<TabItem value="Clients-Traffic" label="Clients-Traffic">

| Option                            | Description                                                                                        | Option type |
|:----------------------------------|:---------------------------------------------------------------------------------------------------|:------------|
| --plugin                          |     =cloud::azure::integration::servicebus::plugin                                                 | Mode        |
| --warning-lastbyte-response-time  |     ='1000'                                                                                        | Mode        |
| --critical-lastbyte-response-time |     ='2000'     Default aggregation: 'total' / 'average', 'minimum' and 'maximum' are     valid.   | Mode        |
| --resource                        |     Set resource name or id (Required).                                                            | Mode        |
| --resource-group                  |     Set resource group (Required if resource's name is used).                                      | Mode        |
| --warning-*                       |     Warning threshold where '*' can be: 'clients-bytes-received', 'clients-bytes-sent'.            | Mode        |
| --critical-*                      |     Critical threshold where '*' can be: 'clients-bytes-received', 'clients-bytes-sent'.           | Mode        |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option                         | Description                                                     | Option type |
|:-------------------------------|:----------------------------------------------------------------|:------------|
| --warning-current-connections  |     Warning threshold.                                          | Mode        |
| --critical-current-connections |     Critical threshold.                                         | Mode        |
| --plugin                       |     =cloud::azure::integration::servicebus::plugin              | Mode        |
| --resource                     |     Set resource name or id (Required).                         | Mode        |
| --resource-group               |     Set resource group (Required if resource's name is used).   | Mode        |

</TabItem>
<TabItem value="Gateway-Time" label="Gateway-Time">

| Option                | Description                                                     | Option type |
|:----------------------|:----------------------------------------------------------------|:------------|
| --plugin              |     =cloud::azure::integration::servicebus::plugin              | Mode        |
| --resource            |     Set resource name or id (Required).                         | Mode        |
| --critical-total-time |     Critical threshold.                                         | Mode        |
| --resource-group      |     Set resource group (Required if resource's name is used).   | Mode        |
| --warning-total-time  |     Warning threshold.                                          | Mode        |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                               | Option type |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --resource        |     Set resource name or id (Required).                                                                                                   | Mode        |
| --resource-group  |     Set resource group (Required if resource's name is used).                                                                             | Mode        |
| --warning-status  |     Set warning threshold for status (Default: ''). Can used special variables like: %{status}, %{summary}                                | Mode        |
| --critical-status |     Set critical threshold for status (Default: '%{status} =~ /^Unavailable$/'). Can used special variables like: %{status}, %{summary}   | Mode        |
| --unknown-status  |     Set unknown threshold for status (Default: '%{status} =~ /^Unknown$/'). Can used special variables like: %{status}, %{summary}        | Mode        |
| --ok-status       |     Set ok threshold for status (Default: '%{status} =~ /^Available$/'). Can used special variables like: %{status}, %{summary}           | Mode        |

</TabItem>
<TabItem value="Requests" label="Requests">

| Option                     | Description                                                                                        | Option type |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------|
| --resource                 |     Set resource name or id (Required).                                                            | Mode        |
| --critical-failed-requests |     ='2000'     Default aggregation: 'total' / 'average', 'minimum' and 'maximum' are     valid.   | Mode        |
| --resource-group           |     Set resource group (Required if resource's name is used).                                      | Mode        |
| --warning-*                |     Warning threshold where '*' can be: 'failed-requests', 'total-requests'.                       | Mode        |
| --critical-*               |     Critical threshold where '*' can be: 'failed-requests', 'total-requests'.                      | Mode        |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                | Description                                                     | Option type |
|:----------------------|:----------------------------------------------------------------|:------------|
| --resource            |     Set resource name or id (Required).                         | Mode        |
| --critical-throughput |     Critical threshold.                                         | Mode        |
| --resource-group      |     Set resource group (Required if resource's name is used).   | Mode        |
| --warning-throughput  |     Warning threshold.                                          | Mode        |

</TabItem>
<TabItem value="Units" label="Units">

| Option                   | Description                                                                                                                      | Option type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:------------|
| --resource               |     Set resource name or id (Required).                                                                                          | Mode        |
| --critical-compute-units |     ='2000'     Default aggregation: 'average' / 'total', 'minimum' and 'maximum' are     valid.                                 | Mode        |
| --resource-group         |     Set resource group (Required if resource's name is used).                                                                    | Mode        |
| --warning-*              |     Warning threshold where '*' can be: 'estimated-billed-units', 'fixed-billable-units', 'compute-units', 'capacity-units'.     | Mode        |
| --critical-*             |     Critical threshold where '*' can be: 'estimated-billed-units', 'fixed-billable-units', 'compute-units', 'capacity-units'.    | Mode        |

</TabItem>
</Tabs>


Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
usr/lib/centreon/plugins//centreon_azure_network_appgateway_api.pl \
    --plugin=cloud::azure::network::appgateway::plugin \
    --mode=units \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.