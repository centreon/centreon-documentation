---
id: cloud-azure-management-loganalytics
title: Azure Log Analytics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Log Analytics est un outil Azure permettant de réaliser des requêtes dans les
journaux d'événements collectés par l'agent Azure Monitor Logs.

Le Plugin-Pack *Azure Log Analytics* permet de réaliser des requêtes et d'afficher
le nombre d'enregistrement retournés pour une requête donnée.

Il peut s'appuyer sur l'API Azure Management Monitor ou l'Azure CLI.

## Contenu du Plugin-Pack

### Objets supervisés

* Nombre de logs retournés par une requête KQL

### Métriques collectées 

<Tabs groupId="sync">
<TabItem value="Kusto-Query" label="Kusto-Query">

| Metric name               | Description                                        | Unit  |
|:--------------------------|:-------------------------------------------------- |:----- |
| match.count               | The number of logs matching the query expression.  | count |

La Macro KUSTOQUERY est obligatoire. 

</TabItem>
</Tabs>

## Prérequis
Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant effectuer des requêtes vers Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Azure Log Analytics* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant effectuer des requêtes vers Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2.Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Azure Log Analytics*:

```bash
yum install centreon-pack-cloud-azure-management-log-analytics-api
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Azure Log Analytics* depuis la page "Configuration > Plugin packs > Gestionnaire"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Management-Log-Analytics-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le custom-mode utilisé:

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Mandatory   | Nom               | Description       |
| :---------- | :---------------- | :---------------- |
| X           | AZURECUSTOMMODE   | Custom mode 'api' |
| X           | AZURESUBSCRIPTION | Subscription ID   |
| X           | AZURETENANT       | Tenant ID         |
| X           | AZURECLIENTID     | Client ID         |
| X           | AZURECLIENTSECRET | Client secret     |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Nom               | Description         |
| :---------------- | :------------------ |
| AZURECUSTOMMODE   | Custom mode 'azcli' |
| AZURESUBSCRIPTION | Subscription ID     |

</TabItem>
</Tabs>

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \
    --plugin=cloud::azure::management::loganalytics::plugin \
    --mode=kusto-query --custommode='api' --management-endpoint='https://api.loganalytics.io' \
    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'
    --workspace-id='xxxxxxxxxxxxxxx' --custom-output='Number of computer without heartbeat for more than 2 days: %d' \
    --query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)' \
    --critical-match='0'
```

La commande devrait retourner un message de sortie similaire à: 

```bash
CRITICAL: Number of computer without heartbeat for more than 2 days: 1 | 'match.count'=1;;;0;
```

La commande ci-dessus effectue une requête KustoQL dans Azure Log Analytics au 
moyen de l'API (```-plugin=cloud::azure::management::loganalytics::plugin --mode=kusto-query --custommode='api'```).

Les éléments récupérés dans la partie prérequis pour l'authentification sont
ajoutés pour l'obtention d'un token (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```). 

Les options utilisées pour ce mode permettent de spécifier le *workspace* dans lequel 
sera lancée la requête (```--workspace-id='xxxxxxxxxxxxxxx'```) et de personnaliser le 
message de sortie au format *printf* pour le rendre plus compréhensible en cas d'alerte 
(```--custom-output='Number of computer without heartbeat for more than 2 days: %d'```). 

La commande retourne un CRITICAL car le nombre de lignes retournées est supérieur à 0 (```--critical-match='0'```).

La requête indiquée dans la commande peut également intégrer une borne temporelle, par exemple pour
n'obtenir que le nombre d'occurences sur lesquelles l'attribut *LastCall* date de plus de deux jours
(```--query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)'```).

La borne de temps pour la requête peut également être précisée au format ISO-8601 via l'option ```--timespan```.

La liste de toutes les options complémentaires et leurs signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \
    --plugin=cloud::azure::management::loganalytics::plugin \
    --mode=kusto-query
    --help
```

### Diagnostic des erreurs communes  

#### ```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```

Lors du déploiement de mes contrôles, j'obtiens le message suivant : 
```UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)```.

Cela signifie que l'un des paramètres utilisés pour authentifier la requête est incorrect. Le paramètre 
en question est spécifié dans le message d'erreur en lieu et place de 'ERROR_DESC'. 

Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret
ne sont pas valides.

#### Les identifiants ont changé et mon Plugin ne fonctionne plus

Le Plugin utilise un fichier de cache pour conserver les informations de connexions pour ne pas 
se ré-authentifier à chaque appel. Si des informations sur le Tenant, la Souscription ou les 
Client ID / Secret changent, il est nécessaire de supprimer le fichier de cache du Plugin. 

Celui ci se trouve dans le répertoire ```/var/lib/centreon/centplugins/``` avec le nom azure_api_`<md5>_<md5>_<md5>_<md5>`.

#### UNKNOWN: 500 Can't connect to login.microsoftonline.com:443 

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

Il est également possible qu'un équipement tiers de type Pare-feu bloque la requête
effectuée par le Plugin. 
