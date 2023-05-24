---
id: cloud-azure-management-applicationinsights
title: Azure Application Insights
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Azure Applications Insights étend les fonction d'Azure Monitor permettant de
superviser des applications en temps réel.

Le connecteur de supervision Centreon *Azure Application Insights* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
Application Gateway. Il est possible d'utiliser les 2 modes proposés par Microsoft: RestAPI ou Azure CLI.

## Contenu du Pack

### Objets supervisés

* Instances Azure *Application Insights*
    * Availability   
    * Browser-Timings
    * Cpu
    * Exceptions
    * External-Calls   
    * IO-Operations  
    * Memory 
    * Requests

### Règles de découverte

Le connecteur de supervision Centreon *Azure Application Insights* inclut un *provider* de découverte d'Hôtes nommé **Microsoft Azure Application Insights**.
Celui-ci permet de découvrir l'ensemble des instances *Application Insights* rattachés à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-management-applicationinsights-provider.png)

> La découverte *Azure Application Insights* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation. 

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés 

<Tabs groupId="sync">
<TabItem value="Availability" label="Availability">

| Metric Name                                          | Description                | Unit  |
|:-----------------------------------------------------|:---------------------------|:------|
| appinsights.availability.percentage                  | Availability               | %     |
| appinsights.availability.tests.count                 | Availability tests         | Count |
| appinsights.availability.tests.duration.milliseconds | Availability test duration | ms    |

</TabItem>
<TabItem value="Browsertimings" label="Browsertimings">

| Metric Name                                  | Description                    | Unit |
|:---------------------------------------------|:-------------------------------|:-----|
| appinsights.processing.duration.milliseconds | Client processing time         | ms   |
| appinsights.processing.duration.milliseconds | Page load network connect time | ms   |
| appinsights.receive.duration.milliseconds    | Receiving response time        | ms   |
| appinsights.send.duration.milliseconds       | Send request time              | ms   |
| appinsights.total.duration.milliseconds      | Browser page load time         | ms   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                                 | Description    | Unit |
|:--------------------------------------------|:---------------|:-----|
| appinsights.cpu.nonidle.time.percentage     | Processor time | %    |
| appinsights.cpu.w3wp.utilization.percentage | Process CPU    | %    |

</TabItem>
<TabItem value="Exceptions" label="Exceptions">

| Metric Name                          | Description        | Unit  |
|:-------------------------------------|:-------------------|:------|
| appinsights.exceptions.browser.count | Browser exceptions | Count |
| appinsights.exceptions.server.count  | Server exceptions  | Count |
| appinsights.exceptions.total.count   | Exceptions         | Count |

</TabItem>
<TabItem value="Externalcalls" label="Externalcalls">

| Metric Name                             | Description              | Unit  |
|:----------------------------------------|:-------------------------|:------|
| appinsights.calls.count                 | Dependency calls         | Count |
| appinsights.calls.duration.milliseconds | Dependency duration      | ms    |
| appinsights.calls.failure.count         | Dependency call failures | Count |

</TabItem>
<TabItem value="Iooperations" label="Iooperations">

| Metric Name                                        | Description     | Unit |
|:---------------------------------------------------|:----------------|:-----|
| appinsights.process.bytes.operations.bytesperseconds | Process IO rate | B/s  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                        | Description           | Unit |
|:-----------------------------------|:----------------------|:-----|
| appinsights.memory.available.bytes | Available memory      | B    |
| appinsights.memory.private.bytes   | Process private bytes | B    |

</TabItem>
<TabItem value="Pageviews" label="Pageviews">

| Metric Name                             | Description         | Unit  |
|:----------------------------------------|:--------------------|:------|
| appinsights.pageviews.load.milliseconds | Page view load time | ms    |
| appinsights.pageviews.total.count       | Page views          | Count |

</TabItem>
<TabItem value="Requests" label="Requests">

| Metric Name                                      | Description                        | Unit       |
|:-------------------------------------------------|:-----------------------------------|:-----------|
| appinsights.requests.duration.milliseconds       | Server response time               | ms         |
| appinsights.requests.execution.time.milliseconds | HTTP request execution time        | ms         |
| appinsights.requests.failed.count                | Failed requests                    | Count      |
| appinsights.requests.queued.count                | HTTP requests in application queue | Count      |
| appinsights.requests.http.perseconds             | HTTP request rate                  | requests/s |
| appinsights.requests.perseconds                  | Server request rate                | requests/s |
| appinsights.requests.total.count                 | Server requests                    | Count      |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Management-ApplicationInsights-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des Macros:
> * Utilisation de l'ID complet de la ressource (de type ```/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.Network/<resource_type>/<resource_name>```)
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
| X         | AZURERESOURCE      | ID or name of the Application Gateway resource     |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
|           | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the Application Gateway resource     |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
|           | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_applicationinsights_api.pl \
    --plugin=cloud::azure::management::applicationsinsights::plugin \
    --mode=requests \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='APP001ABCD' \
    --resource-group='RSG1234' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Total' \
    --warning-requests-failed='80' \
    --critical-requests-failed='90'
```

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Instance 'APP001ABCD' Statistic 'total' Metrics Server requests: 3266.57, HTTP request rate: 0.00requests/s, Server response time: 3266.57ms, HTTP request execution time: 0.00ms, HTTP requests in application queue: 0.00, Server request rate: 0.10requests/s, Failed requests: 0.00 | 'APP001ABCD~total#appinsights.requests.total.count'=3266.57;;;0; 'APP001ABCD~total#appinsights.requests.http.perseconds'=0.00requests/s;;;0; 'APP001ABCD~total#appinsights.requests.duration.milliseconds'=3266.57ms;;;0; 'APP001ABCD~total#appinsights.requests.execution.time.milliseconds'=0.00ms;;;0; 'APP001ABCD~total#appinsights.requests.failed.count'=0.00;;;0; 'APP001ABCD~total#appinsights.requests.server.perseconds'=0.10requests/s;;;0; 'APP001ABCD~total#appinsights.requests.failed.count'=0.00;;;0;
```

La commande ci-dessus vérifie les statistiques de *requêtes* de l'instance *Application Insights* nommée *APP001ABCD*
(```--plugin=cloud::azure::management::applicationsinsights::plugin --mode=requests --resource='APP001ABCD'```) et liée au *Resource Group* *RSG1234*
(```--resource-group='RSG1234'```).

Le mode de connexion utilisé est 'api' (```--custommode=api```), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

Les statuts caculés se baseront sur les valeurs totales d'un échantillon dans un intervalle de 15 minutes / 900 secondes  (```--timeframe='900'```) 
avec un état retourné par tranche de 5 minutes (```--interval='PT5M'```).

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre de requêtes 'failed' pendant l'intervalle donné
est supérieur à 80 (```--warning-requests-failed='80'```); l'alarme sera de type CRITICAL au-delà de 90 requêtes en erreur.
(```--critical-requests-failed='90'```).

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_applicationinsights_api.pl \
    --plugin=cloud::azure::management::applicationsinsights::plugin \
    --mode=requests \
    --help
```

## Diagnostic des erreurs communes  

### Les identifiants ont changé et mon Plugin ne fonctionne plus

Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas 
se ré-authentifier à chaque appel. Si des informations sur le Tenant, la Souscription ou les 
Client ID / Secret changent, il est nécessaire de supprimer le fichier de cache du Plugin. 

Celui ci se trouve dans le répertoire ```/var/lib/centreon/centplugins/``` avec le nom azure_api_`<md5>_<md5>_<md5>_<md5>`.

### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

Cela signifie que l'un des paramètres utilisés pour authentifier la requête est incorrect. Le paramètre 
en question est spécifié dans le message d'erreur en lieu et place de 'ERROR_DESC'. 

Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret
n'est (ne sont) pas valide(s).

### ```UNKNOWN: 500 Can't connect to login.microsoftonline.com:443```

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

Il est également possible qu'un équipement tiers de type Pare-feu bloque la requête
effectuée par le Plugin.

### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Azure n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.
