---
id: cloud-azure-management-insightsmetrics
title: Azure InsightsMetrics
---

## Vue d'ensemble

Le Pack Centreon *Azure InsightsMetrics* permet de superviser des métriques additionelles relatives aux resources Azure. Pour cela,
elle se base sur l'API *LogAnalytics* d'Azure et exécutes des requêtes KustoQL sur la base de données InsightsMetrics.
Ce Pack permet par exemple de récupérer et de superviser les indicateurs système (CPU, mémoire, disques...) de Virtual Machines directement sur Azure.

> Le Pack *Azure InsightsMetrics* est uniquement compatible avec le *custom-mode* 'api'.

## Contenu du Pack

### Objets supervisés

* Azure Virtual Machines
     * CPU
     * Memory
     * Logical-Disks

### Métriques & statuts collectés 

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric Name                                                   | Description                    | Unit |
|:--------------------------------------------------------------|:-------------------------------|:-----|
| *instance*#azure.insights.cpu.average.utilization.percentage  | Average utilization percentage | %    |
| *instance\~ID*#azure.insights.cpu.core.utilization.percentage | Current utilization per core   | %    |

<!--Logical-Disks-->

| Metric Name                                                               | Description                            | Unit    |
|:--------------------------------------------------------------------------|:---------------------------------------|:--------|
| *instance\~mount_point*#azure.insights.logicaldisk.used.bytes             | Logical Disk current usage             | B       |
| *instance\~mount_point*#azure.insights.logicaldisk.used.percentage        | Logical Disk current usage percentage  | %       |
| *instance\~mount_point*#azure.insights.logicaldisk.free.percentage        | Logical Disk current free percentage   | %       |
| *instance\~mount_point*#azure.insights.logicaldisks.io.readspersecond     | Logical Disk current IO/s reads rate   | count/s |
| *instance\~mount_point*#azure.insights.logicaldisks.io.readbytespersecond | Logical Disk current IO B/s reads rate | B/s     |
| *instance\~mount_point*#azure.insights.logicaldisks.io.writespersecond    | Logical Disk current IO writes rate    | count/s |
| *instance\~mount_point*#azure.insights.logicaldisks.io.transferspersecond | Logical Disk current IO transfers rate | count/s |

<!--Memory-->

| Metric Name                                           | Description                         | Unit |
|:------------------------------------------------------|:------------------------------------|:-----|
| *instance*#azure.insights.memory.usage.bytes          | Current memory usage                | B    |
| *instance*#azure.insights.memory.usage.percentage     | Current memory usage percentage     | %    |
| *instance*#azure.insights.memory.usage.percentage     | Current memory usage percentage     | %    |
| *instance*#azure.insights.memory.available.percentage | Current memory available percentage | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

### Règles de découverte

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                                                    | Description                                                 |
|:-----------------------------------------------------------------------------|:------------------------------------------------------------|
| Cloud-Azure-Management-InsightsMetrics-Api-VirtualMachine-Logical-Disks-Name | Discover logical disks associated to Azure Virtual Machines |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Identifiants

Le Pack Centreon *Azure InsightsMetrics* est uniquement compatible avec le *custom-mode* 'api'.

Récupérez les informations d'identification associées en suivant la procédure ci-dessous (en anglais)
et notez celles-ci en lieu sûr. Elles seront en effet indispensables lors de la configuration des ressources
dans Centreon.

* Create an *application* in Azure Active Directory:
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *App registrations*.
    - Click on *+ Add*.
    - Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url.
    - Click on the *Create* button.

* Get *Subscription ID*
    - Log in to your Azure account.
    - Select *Subscriptions* in the left sidebar.
    - Select whichever subscription is needed.
    - Click on *Overview*.
    - **Copy the Subscription ID.**

* Get *Tenant ID*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *Properties*.
    - **Copy the directory ID.**

* Get *Client ID*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *Enterprise applications*.
    - Click on *All applications*.
    - Select the application previously created.
    - Click on *Properties*.
    - **Copy the Application ID.**

* Get *Client secret*
    - Log in to your Azure account.
    - Select *Azure Active directory* in the left sidebar.
    - Click on *App registrations*.
    - Select the application previously created.
    - Click on *All settings*.
    - Click on *Keys*.
    - Enter the key description and select the duration.
    - Click on *Save*.
    - **Copy and store the key value. You won't be able to retrieve it after you leave this page.**

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources *via* InsightsMetrics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```

2. Sur l'interface Web Centreon, installer le Pack *Azure InsightsMetrics* depuis la page "Configuration > Plugin packs > Manager".

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources *via* InsightsMetrics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```
2. Sur le serveur Central Centreon, installer le RPM du Pack *Azure InsightsMetrics*:
```bash
yum install centreon-pack-cloud-azure-management-insightsmetrics.noarch
```

3. Sur l'interface Web Centreon, installer le Pack *Azure InsightsMetrics* depuis la page "Configuration > Plugin packs > Gestionnaire".

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Management-InsightsMetrics-XXX-custom* approprié au type de ressource à superviser
(par exemple *Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom* pour une resource Azure VM).
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées:

| Mandatory | Nom                       | Description                                                    |
|:----------|:--------------------------|:---------------------------------------------------------------|
| X         | AZURECUSTOMMODE           | Custom mode 'api'                                              |
| X         | AZURELOGANALYTICSENDPOINT | LogAnalytics endpoint (default: `https://api.loganalytics.io`) |
| X         | AZURESUBSCRIPTION         | Subscription ID                                                |
| X         | AZUREWORKSPACEID          | LogAnalytics workspace ID                                      |
| X         | AZURETENANT               | Tenant ID                                                      |
| X         | AZURECLIENTID             | Client ID                                                      |
| X         | AZURECLIENTSECRET         | Client secret                                                  |
| X         | AZURERESOURCE             | full ID of the resource to monitor                             |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* (`#su - centreon-engine`):

```bash
/usr/lib/centreon/plugins//centreon_azure_management_insightsmetrics_api.pl \
    --plugin=cloud::azure::management::insightsmetrics::plugin \
    --mode=cpu --custommode='api' --management-endpoint='https://api.loganalytics.io' \
    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx' \
    --workspace-id='xxxxxxxxxxxxxxx' \
    --filter-resourceid='/subscriptions/XXXX/resourcegroups/my_resourcegroup1/providers/microsoft.compute/virtualmachines/my_vm1' \
    --warning-average-utilization-percentage='90' \
    --critical-average-utilization-percentage='95'
```

La commande devrait retourner un message de sortie similaire à: 

```bash
OK: 2 CPU(s) average utilization: 2.18 % - All CPUs are ok | 'azure.insights.cpu.average.utilization.percentage'=2.18%;0:90;0:95;0;100
'1#azure.insights.cpu.core.utilization.percentage'=2.12%;;;0;100 '2#azure.insights.cpu.core.utilization.percentage'=2.25%;;;0;100
Computer 'my_vm1'
2 CPU(s) average utilization: 2.18 %
CPU #1 usage : 2.12 %
CPU #2 usage : 2.25 %
```

La commande ci-dessus contrôle le CPU d'une ressource Azure VM via les indicateurs InsightsMetrics
(```--plugin=cloud::azure::management::insightsmetrics::plugin --mode=cpu --custommode='api'```).

Les éléments récupérés dans la partie prérequis pour l'authentification sont
ajoutés pour l'obtention d'un token (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```). 

Les options utilisées pour ce mode permettent de spécifier le *workspace* dans lequel 
sera lancée la requête (```--workspace-id='xxxxxxxxxxxxxxx'```) ainsi que l'URL de l'API *LogAnalytics* à utiliser (
```--management-endpoint='https://api.loganalytics.io'```). 

Dans cet exemple, une alarme de type WARNING sera déclenchée si l'utilisation CPU moyenne est supérieure à 90% (```--warning-average-utilization-percentage='90'```);
l'alarme sera de type CRITICAL au-delà de 95% d'utilisation (```--critical-average-utilization-percentage='95'```).


La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ```--help```
à la commande:

```bash
/usr/lib/centreon/plugins/centreon_azure_management_insightsmetrics_api.pl \
    --plugin=cloud::azure::management::insightsmetrics::plugin \
    --mode=cpu \
    --help
```

### Diagnostic des erreurs communes  

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html#http-and-api-checks) des Plugins basés sur HTTP/API.
