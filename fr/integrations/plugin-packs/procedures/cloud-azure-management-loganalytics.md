---
id: cloud-azure-management-loganalytics
title: Azure Log Analytics
---

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

<!--DOCUSAURUS_CODE_TABS-->

<!--Kusto-Query-->

| Metric name               | Description                                        | Unit  |
|:--------------------------|:-------------------------------------------------- |:----- |
| match.count               | The number of logs matching the query expression.  | count |

La Macro KUSTOQUERY est obligatoire. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Deux moyens sont disponibles pour interroger les API Microsoft Azure. 

Centreon préconise l'utilisation de la méthode *API* plutôt que la *CLI*, cette dernière étant significativement
moins performante. L'API permet également une authentification *Application* et ne nécessite pas de compte de service dédié.

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

Pour le custom-mode 'api', récupérez les informations en suivant la procédure ci-dessous (en anglais)
et notez celles-ci en lieu sûr. Elles seront en effet indispensables lors de la configuration des ressources
dans Centreon.

* Create an *application* in Azure Active Directory:
    - Login into your azure account.
    - Select Azure Active directory in the left sidebar.
    - Click on App registrations.
    - Click + Add.
    - Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url.
    - Click on create button.

* Get *Subscription ID*
    - Login into your azure account.
    - Select Subscriptions in the left sidebar.
    - Select whichever subscription is needed.
    - Click on overview.
    - **Copy the Subscription ID.**

* Get *Tenant ID*
    - Login into your azure account.
    - Select azure active directory in the left sidebar.
    - Click properties.
    - **Copy the directory ID.**

* Get *Client ID*
    - Login into your azure account.
    - Select azure active directory in the left sidebar.
    - Click Enterprise applications.
    - Click All applications.
    - Select the application which you have created.
    - Click Properties.
    - **Copy the Application ID.**

* Get *Client secret*
    - Login into your azure account.
    - Select azure active directory in the left sidebar.
    - Click App registrations.
    - Select the application which you have created.
    - Click on All settings.
    - Click on Keys.
    - Type Key description and select the Duration.
    - Click save.
    - **Copy and store the key value. You won't be able to retrieve it after you leave this page.**

<!--Azure AZ CLI-->

Afin d'utiliser le custom-mode 'azcli', installer le binaire associé sur tous les Collecteurs Centreon
devant superviser des resources Azure:

- La CLI requiert une version de Python >= 2.7 (<https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md>)

Sur un système utilisant le packaging RPM, utiliser les commandes ci-dessous avec 
l'utilisateur root ou un utilisateur avec les droits sudo adéquats:

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
sudo yum install azure-cli
```

Ensuite, réaliser les opérations suivantes avec l'utilisateur centreon-engine 
pour récupérer un token Azure:

```shell
su - centreon-engine
az login
```

La commande retourne le message ci-dessous contenant un code:

    *To sign in, use a web browser to open the page https://microsoft.com/devicelogin*
    *and enter the code CWT4WQZAD to authenticate.*

Rendez-vous sur <https://microsoft.com/devicelogin> afin de saisir le code obtenu.

Se connecter avec le compte de service dédié à la supervision, cela devrait déclencher
l'affichage des éléments suivants dans le terminal: 

```shell
    [
      {
        "cloudName": "AzureCloud",
        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",
        "isDefault": true,
        "name": "N/A(tenant level account)",
        "state": "Enabled",
        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",
        "user": {
          "name": "email@mycompany.onmicrosoft.com",
          "type": "user"
        }
      }
    ]
```

Vous avez désormais les informations stockées localement dans un fichier 
accessTokens.json qui sera utilisé automatiquement par le Plugin. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant effectuer des requêtes vers Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Azure Log Analytics* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant effectuer des requêtes vers Azure Log Analytics:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

2.Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Azure Log Analytics*:

```bash
yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Azure Log Analytics* depuis la page "Configuration > Plugin packs > Gestionnaire"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Management-Log-Analytics-custom*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) 
doivent être renseignées selon le custom-mode utilisé:

<!--DOCUSAURUS_CODE_TABS-->

<!--Azure Monitor API-->

| Mandatory   | Nom               | Description       |
| :---------- | :---------------- | :---------------- |
| X           | AZURECUSTOMMODE   | Custom mode 'api' |
| X           | AZURESUBSCRIPTION | Subscription ID   |
| X           | AZURETENANT       | Tenant ID         |
| X           | AZURECLIENTID     | Client ID         |
| X           | AZURECLIENTSECRET | Client secret     |

<!--Azure AZ CLI-->

| Nom               | Description         |
| :---------------- | :------------------ |
| AZURECUSTOMMODE   | Custom mode 'azcli' |
| AZURESUBSCRIPTION | Subscription ID     |

<!--END_DOCUSAURUS_CODE_TABS-->

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

Celui ci se trouve dans le répertoire ```/var/lib/centreon/centplugins/``` avec le nom azure_api_<md5>_<md5>_<md5>_<md5>.

#### UNKNOWN: 500 Can't connect to login.microsoftonline.com:443 

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

Il est également possible qu'un équipement tiers de type Pare-feu bloque la requête
effectuée par le Plugin. 
