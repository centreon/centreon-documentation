---
id: cloud-azure-devtools-appconfiguration
title: Azure App Configuration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

App Configuration permet de gérer les paramètres des applications et à en 
contrôler l'accès de manière centralisée en stockant  leurs configurations dans 
un emplacement hébergé universel.

Le Plugin-Pack Centreon *Azure App Configuration* s'appuie sur les API Azure Monitor 
afin de récuperer les métriques relatives au service
App Configuration. Il est possible d'utiliser les 2 modes proposés par 
Microsoft: RestAPI ou Azure CLI.

## Contenu du Plugin-Pack

### Objets supervisés

* Requêtes HTTP Azure *App Configuration*

### Règles de découverte

Le Plugin-Pack Centreon *Azure App Configuration* inclut un *provider* de découverte d'Hôtes nommé **Microsoft Azure App Configuration**.
Celui-ci permet de découvrir l'ensemble des instances *App Configuration* rattachés à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-devtools-appconfiguration-provider.png)

> La découverte *Azure App Configuration* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation. 

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés 

<Tabs groupId="sync">
<TabItem value="Http-Requests" label="Http-Requests">

| Metric Name                                             | Description                            | Unit  |
|:--------------------------------------------------------|:---------------------------------------|:------|
| appconfiguration.http.incoming.requests.count           | Total number of incoming http requests | Count |
| appconfiguration.http.incoming.requests.milliseconds    | Latency on an http request             | ms    |
| appconfiguration.http.throttled.incoming.requests.count | Throttled http requests                | Count |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure App Configuration:

```bash
yum install centreon-plugin-Cloud-Azure-DevTools-AppConfiguration-Api
```

2. Sur l'interface Integration de Centreon, installer le Plugin-Pack *Azure App Configuration* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure App Configuration:

```bash
yum install centreon-plugin-Cloud-Azure-DevTools-AppConfiguration-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Azure App Configuration*:

```bash
yum install centreon-pack-cloud-azure-devtools-appconfiguration.noarch
```

3. Sur l'interface Integration de Centreon, installer le Plugin-Pack *Azure App Configuration* depuis la page "Configuration > Plugin packs > Gestionnaire"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-DevTools-AppConfiguration-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le custom-mode utilisé:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory | Nom               | Description                          |
|:----------|:------------------|:-------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'api'                    |
| X         | AZURESUBSCRIPTION | Subscription ID                      |
| X         | AZURETENANT       | Tenant ID                            |
| X         | AZURECLIENTID     | Client ID                            |
| X         | AZURECLIENTSECRET | Client secret                        |
| X         | AZURERESOURCE     | Id of the App Configuration instance |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom               | Description                          |
|:----------|:------------------|:-------------------------------------|
| X         | AZURECUSTOMMODE   | Custom mode 'azcli'                  |
| X         | AZURESUBSCRIPTION | Subscription ID                      |
| X         | AZURERESOURCE     | Id of the App Configuration instance |

</TabItem>
</Tabs>

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_azure_devtools_appconfiguration_api.pl \
    --plugin=cloud::azure::devtools::appconfiguration::plugin \
    --mode=http-requests \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='APPCONF01' \
    --resource-group='xxxxxxxxx' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Count' \
    --warning-http-requests='800' \
    --critical-http-requests='900'
```

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Instance 'APPCONF01' Statistic 'count' Metrics Incoming HTTP requests: 0.00, 
Throttled Incoming HTTP requests: 0.00, Incoming HTTP requests duration: 0.00ms | 
'APPCONF01~count#http.incoming.requests.count'=0.00;0:800;0:900;0; 
'APPCONF01~count#http.throttled.incoming.requests.count'=0.00;;;0; 
'APPCONF01~count#http.incoming.requests.milliseconds'=0.00ms;;;0;
```

La commande ci-dessus vérifie le nombre de requêtes HTTP sur l'instance *App Configuration* nommée *APPCONF01*
(```--plugin=cloud::azure::devtools::appconfiguration::plugin --mode=http-requests --resource='APPCONF01'```).

Le mode de connexion utilisé est 'api' (```--custommode=api```), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

Les statuts caculés se baseront sur le nombre de valeurs d'un échantillon dans un intervalle de 15 minutes / 900 secondes  (```--timeframe='900'```) 
avec un état retourné par tranche de 5 minutes (```--interval='PT5M'```).

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre de *requests* pendant l'intervalle donné
est supérieur à 800 (```--warning-http-requests='800'```); l'alarme sera de type CRITICAL au-delà de 900 requêtes
(```--critical-http-requests='900'```).

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_azure_devtools_appconfiguration_api.pl \
    --plugin=cloud::azure::devtools::appconfiguration::plugin \
    --mode=http-requests \
    --help
```

### Diagnostic des erreurs communes  

#### Les identifiants ont changé et mon Plugin ne fonctionne plus

Le Plugin utilise un fichier de cache pour conserver les informations de connexion afin de ne pas 
se ré-authentifier à chaque appel. Si des informations sur le Tenant, la Souscription ou les 
Client ID / Secret changent, il est nécessaire de supprimer le fichier de cache du Plugin. 

Celui ci se trouve dans le répertoire ```/var/lib/centreon/centplugins/``` avec le nom azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

Lors du déploiement de mes contrôles, j'obtiens le message suivant : 
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

Cela signifie que l'un des paramètres utilisés pour authentifier la requête est incorrect. Le paramètre 
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
