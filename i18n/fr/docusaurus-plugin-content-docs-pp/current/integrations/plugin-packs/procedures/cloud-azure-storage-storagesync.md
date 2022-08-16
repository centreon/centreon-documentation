---
id: cloud-azure-storage-storagesync
title: Azure Storage Sync
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

En transformant un serveur Windows en cache rapide, le service Azure Storage 
Sync vous permet de centraliser votre partage de fichiers dans Azure Files.

Le Plugin-Pack Centreon *Azure Storage Sync* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
Storage Sync. Il est possible d'utiliser les 2 modes proposés par Microsoft: 
RestAPI ou Azure CLI.

## Contenu du Pack

### Objets supervisés

* Files synchronised 
* Recalls statistics
* Server Status

### Règles de découverte

Le Plugin-Pack Centreon *Azure Storage Sync* inclut un *provider* de découverte
d'Hôtes nommé *Microsoft Azure Storage Syncs**. Celui-ci permet de découvrir l'ensemble des instances
*Azure Storage Sync* rattachées à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-storage-storagesync-provider.png)
> La découverte *Azure Storage Sync* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation.

Vous trouverez plus d'informations sur la découverte d'Hôtes et son
fonctionnement sur la documentation du module:
[Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Files-Synced" label="Files-Synced">

| Metric name                    | Description  | Unit  |
|:-------------------------------|:-------------|:------|
| storagesync.files.synced.count | Files Synced | Count |
| storagesync.item.errors.count  | Item errors  | Count |
| storagesync.bytes.synced.bytes | Bytes synced | B     |

</TabItem>
<TabItem value="Recalls" label="Recalls">

| Metric name                                        | Description                              | Unit |
|:---------------------------------------------------|:-----------------------------------------|:-----|
| storagesync.recalls.succesful.percentage           | Cloud tiering recall success rate        | %    |
| storagesync.recalls.application.size.bytes         | Cloud tiering recall size by application | B    |
| storagesync.recalls.size.bytes                     | Cloud tiering recall size                | B    |
| storagesync.recalls.total.size.bytes               | Cloud tiering recall                     | B    |
| storagesync.recalls.throughput.size.bytespersecond | Cloud tiering recall throughput          | B/s  |

</TabItem>
<TabItem value="Server-Status" label="Server-Status">

| Metric name                 | Description | Unit  |
|:----------------------------|:------------|:------|
| storagesync.heartbeat.count | Heartbeat   | Count |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Azure Storage Sync*:

```bash
yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api
```

2. Sur l'interface Integration de Centreon, installer le Plugin Pack *Azure Storage Sync* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Azure Storage Sync*:

```bash
yum install centreon-plugin-Cloud-Azure-Storage-StorageSync-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Azure Storage Sync*:

```bash
yum install centreon-pack-cloud-azure-storage-storagesync
```

3. Sur l'interface Integration de Centreon, installer le Plugin Pack *Azure Storage Sync* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Storage-StorageSync-custom*.
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
| X         | AZURERESOURCE      | ID or name of the Storage Sync resource            |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the Storage Sync resource            |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur *centreon-engine*:

```bash
 /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --mode=files-synced  \
    --custommode='api'  \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='STO001ABCD' \
    --resource-group='RSG1234'
    --aggregation='Total' \
    --timeframe='900' \
    --interval='PT5M' \
    --warning-item-errors='800'  \
    --critical-item-errors='900'
 ```

 La commande devrait retourner un message de sortie similaire à :

```bash
OK : Instance 'STO001ABCD' Statistic 'total'Files Synced: 546.00, Item errors: 3.00, Bytes synced: 246.00 |
'STO001ABCD~storagesync.files.synced.count'=546;;;; 'STO001ABCD~storagesync.item.errors.count'=3;800;900;0; 'STO001ABCD~storagesync.bytes.synced.bytes'=246;;;0;
 ```

La commande ci-dessus vérifie le nombre d'erreurs de synchronisation sur l'instance *Storage Sync* nommée *STO001ABCD*
(`--plugin=cloud::azure::network::cdn::plugin --mode=requests --resource='STO001ABCD'`) et liée au *Resource Group* *RSG1234*
(`--resource-group='RSG1234'`).

Le mode de connexion utilisé est 'api' (`--custommode=api`), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (`--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'`).

Les statuts caculés se baseront sur les valeurs totales d'un échantillon dans un intervalle de 15 minutes / 900 secondes  (`--timeframe='900'`) 
avec un état retourné par tranche de 5 minutes (`--interval='PT5M'`).

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre d'erreurs de synchronisation pendant l'intervalle donné
est supérieur à 800 (`--warning-item-errors='800'`); l'alarme sera de type CRITICAL au-delà de 900 erreurs
(`--critical-item-errors='900'`).

```bash
/usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
    --mode=files-synced  \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoute le paramètre 
`--list-mode` à la commande:

```bash
 /usr/lib/centreon/plugins//centreon_azure_storage_storagesync_api.pl   \
    --plugin=cloud::azure::storage::storagesync::plugin  \
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