---
id: cloud-azure-web-appserviceplan
title: Azure App Service Plan
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Un plan App Service définit un ensemble de ressources de calcul nécessaires à l’exécution d’une application web. Ces ressources
de calcul sont analogues à la batterie de serveurs dans l’hébergement web classique. Une ou plusieurs applications peuvent être
configurées pour s’exécuter sur les mêmes ressources informatiques (ou dans le même plan App Service).

Le Plugin Pack Centreon *Azure App Service Plan* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
App Service Plan. Il est possible d'utiliser les 2 modes proposés par Microsoft: RestAPI ou Azure CLI.

## Contenu du Pack

### Objets supervisés

* Instances Azure *App Service Plan*
    * CPU
    * Data
    * Health
    * Memory
    * Socket
    * Tcp-Connections

### Règles de découverte

Le Plugin Pack Centreon *Azure App Service Plan* inclut un *provider* de découverte d'Hôtes nommé **Microsoft Azure App Service Plan**.
Celui-ci permet de découvrir l'ensemble des instances *App Service Plan* rattachés à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-web-appserviceplan-provider.png)

> La découverte *Azure App Service Plan* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation. 

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés 

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                         | Description    | Unit |
|:------------------------------------|:---------------|:-----|
| appserviceplan.cpu.usage.percentage | CPU Percentage | %    |

</TabItem>
<TabItem value="Data" label="Data">

| Metric Name                   | Description | Unit |
|:------------------------------|:------------|:-----|
| appserviceplan.data.in.bytes  | Data In     | B    |
| appserviceplan.data.out.bytes | Data Out    | B    |

</TabItem>
<TabItem value="Health" label="Health">

| Status Name | Description                 |
|:------------|:----------------------------|
| status      | Current operational status  |
| summary     | Last related status message |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                      | Description       | Unit |
|:---------------------------------|:------------------|:-----|
| appserviceplan.memory.percentage | Memory Percentage | %    |

</TabItem>
<TabItem value="Socket" label="Socket">

| Metric Name                                     | Description               | Unit  |
|:------------------------------------------------|:--------------------------|:------|
| appserviceplan.socket.inboundall.count          | SocketInboundAll          | Count |
| appserviceplan.socket.loopback.count            | SocketLoopback            | Count |
| appserviceplan.socket.outboundall.count         | SocketOutboundAll         | Count |
| appserviceplan.socket.outboundestablished.count | SocketOutboundEstablished | Count |
| appserviceplan.socket.outboundtimewait.count    | SocketOutboundTimeWait    | Count |

</TabItem>
<TabItem value="Tcp-Connections" label="Tcp-Connections">

| Metric Name                                      | Description      | Unit  |
|:-------------------------------------------------|:-----------------|:------|
| appserviceplan.connections.tcp.closewait.count   | TCP Close Wait   | Count |
| appserviceplan.connections.tcp.closing.count     | TCP Closing      | Count |
| appserviceplan.connections.tcp.finwait1.count    | TCP Fin Wait 1   | Count |
| appserviceplan.connections.tcp.finwait2.count    | TCP Fin Wait 2   | Count |
| appserviceplan.connections.tcp.lastack.count     | TCP Last Ack     | Count |
| appserviceplan.connections.tcp.synreceived.count | TCP Syn Received | Count |
| appserviceplan.connections.tcp.synsent.count     | TCP Syn Sent     | Count |
| appserviceplan.connections.tcp.timewait.count    | TCP Time Wait    | Count |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure App Service Plan:

```bash
yum install centreon-plugin-Cloud-Azure-Web-AppServicePlan-Api
```

2. Sur l'interface Integration de Centreon, installer le Plugin-Pack *Azure App Service Plan* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure App Service Plan:

```bash
yum install centreon-plugin-Cloud-Azure-Web-AppServicePlan-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Azure App Service Plan*:

```bash
yum install centreon-pack-cloud-azure-web-appserviceplan.noarch
```

3. Sur l'interface Integration de Centreon, installer le Plugin-Pack *Azure App Service Plan* depuis la page "Configuration > Plugin Packs > Gestionnaire"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Web-AppServicePlan-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des Macros:
> * Utilisation de l'ID complet de la ressource (de type ```/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.Network/serverFarms/<resource_name>```)
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
| X         | AZURERESOURCE      | ID or name of the App Service Plan resource        |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
|           | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the App Service Plan resource        |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
|           | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_azure_web_appserviceplan_api.pl \
    --plugin=cloud::azure::web::appserviceplan::plugin \
    --mode=cpu \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='PLAN001ABCD' \
    --resource-group='RSG1234' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Total' \
    --warning-cpu-usage-percentage='80' \
    --critical-cpu-usage-percentage='90'
```

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Instance 'PLAN001ABCD' Statistic 'total' Metrics CPU Percentage: 58.50% |
'PLAN001ABCD~total#appserviceplan.cpu.usage.percentage'=58.50%;;;0;100
```

La commande ci-dessus vérifie les statistiques *CPU* de l'instance *App Service Plan* nommée *PLAN001ABCD*
(```--plugin=cloud::azure::web::appserviceplan::plugin --mode=cpu --resource='PLAN001ABCD'```) et liée au *Resource Group* *RSG1234*
(```--resource-group='RSG1234'```).

Le mode de connexion utilisé est 'api' (```--custommode=api```), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

Les statuts caculés se baseront sur les valeurs totales d'un échantillon dans un intervalle de 15 minutes / 900 secondes  (```--timeframe='900'```) 
avec un état retourné par tranche de 5 minutes (```--interval='PT5M'```).

Dans cet exemple, une alarme de type WARNING sera déclenchée si l'utilisation totale du *CPU* pendant l'intervalle donné
est supérieur à 80% (```--warning-cpu-usage-percentage='80'```); l'alarme sera de type CRITICAL au-delà de 90% d'utilisation.
(```--critical-cpu-usage-percentage='90'```).

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_azure_web_appserviceplan_api.pl \
    --plugin=cloud::azure::web::appserviceplan::plugin \
    --mode=cpu \
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
