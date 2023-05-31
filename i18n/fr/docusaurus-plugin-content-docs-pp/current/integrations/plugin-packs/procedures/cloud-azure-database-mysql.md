---
id: cloud-azure-database-mysql
title: Azure Database for MySQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Azure Database pour MySQL vous permet de configurer facilement des instances 
MySQL de haute disponibilité, sécurisées et extensibles.

Le connecteur de supervision Centreon *Azure Database for MySQL* s'appuie sur les API Azure Monitor afin de récuperer les métriques relatives au service
API Management. Il est possible d'utiliser les 2 modes proposés par Microsoft: RestAPI ou Azure CLI.

## Contenu du Pack

### Objets supervisés

* Instances Azure *Azure Database for MySQL*
    * Connections
    * CPU
    * IO consumption
    * Memory
    * Queries
    * Replication
    * Storage
    * Traffic

### Règles de découverte

Le connecteur de supervision Centreon *Azure Database for MySQL* inclut un *provider* de découverte d'Hôtes nommé **Microsoft Azure Database for MySQL**.
Celui-ci permet de découvrir l'ensemble des instances *Azure Database for MySQL* rattachés à une *souscription* Microsoft Azure donnée:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-azure-database-mysql-provider.png)

> La découverte *Azure Database for MySQL* n'est compatible qu'avec le mode 'api'. Le mode 'azcli' n'est pas supporté dans le cadre
> de cette utilisation. 

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)

### Métriques & statuts collectés 

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Metric Name                       | Description                   | Unit  |
|:----------------------------------|:------------------------------|:------|
| azmysql.connections.active.count  | Number of active connections  | Count |
| azmysql.connections.failed.count  | Number of failed Connections  | Count |
| azmysql.connections.aborted.count | Number of aborted Connections | Count |
| azmysql.connections.total.count   | Number of total Connections   | Count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                        | Description     | Unit      |
|:---------------------------------- |:----------------|:----------|
| azmysql.cpu.utilization.percentage | CPU utilization | Percentage |

</TabItem>
<TabItem value="IO-Consumption" label="IO-Consumption">

| Metric Name                            | Description    | Unit       |
|:---------------------------------------|:---------------|:-----------|
| azmysql.ioconsumption.usage.percentage | IO consumption | Percentage |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name                     | Description  | Unit       |
|:--------------------------------|:-------------|:-----------|
| azmysql.memory.usage.percentage | Memory usage | Percentage |

</TabItem>
<TabItem value="Queries" label="Queries">

| Metric Name           | Description       | Unit  |
|:----------------------|:------------------|:------|
| azmysql.queries.count | Number of queries | Count |

</TabItem>
<TabItem value="Replication" label="Replication">

| Metric Name                     | Description      | Unit    |
|:--------------------------------|:-----------------|:--------|
| azmysql.replication.lag.seconds | Replication Lag  | Seconds |
| azmysql.replication.lag.count   | Replication Lag  | Count   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric Name                                | Description              | Unit       |
|:-------------------------------------------|:-------------------------|:-----------|
| azmysql.storage.usage.bytes                | Storage used             | Bytes      |
| azmysql.storage.limit.bytes                | Storage limit            | Bytes      |
| azmysql.storage.usage.percentage           | Storage used             | Percentage |
| azmysql.storage.backup.usage.bytes         | Backup storage used      | Bytes      |
| azmysql.storage.serverlog.limit.bytes      | Server Log storage limit | Bytes      |
| azmysql.storage.serverlog.usage.bytes      | Server Log storage used  | Bytes      |
| azmysql.storage.serverlog.usage.percentage | Server Log storage used  | Percentage |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric Name               | Description | Unit  |
|:--------------------------|:------------|:------|
| azmysql.traffic.out.bytes | Network Out | Bytes |
| azmysql.traffic.in.bytes  | Network In  | Bytes |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

## Installation 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Database for MySQL:

```bash
yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api
```

2. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Azure Database for MySQL* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des resources Azure Database for MySQL:

```bash
yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Azure Database for MySQL*:

```bash
yum install centreon-pack-cloud-azure-database-mysql.noarch
```

3. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Azure Database for MySQL* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon, remplissez le champ *Adresse IP/DNS* avec l'adresse 127.0.0.1 
et appliquez-lui le Modèle d'Hôte *Cloud-Azure-Database-MySQL-custom*.
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
| X         | AZURERESOURCE      | ID or name of the API Management resource          |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
| X         | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Mandatory | Nom                | Description                                        |
|:----------|:-------------------|:---------------------------------------------------|
| X         | AZURECUSTOMMODE    | Custom mode 'azcli'                                |
| X         | AZURESUBSCRIPTION  | Subscription ID                                    |
| X         | AZURERESOURCE      | ID or name of the API Management resource          |
|           | AZURERESOURCEGROUP | Associated Resource Group if resource name is used |
| X         | AZURERESOURCETYPE  | Associated Resource Type if resource name is used  |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \
    --plugin=cloud::azure::database::mysql::plugin \
    --mode=cpu \
    --custommode=api \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --resource='SQL001ABCD' \
    --resource-group='RSG1234' \
    --timeframe='900' \
    --interval='PT5M' \
    --aggregation='Average' \
    --warning-cpu-usage='80' \
    --critical-cpu-usage='90' \
```

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Instance 'SQL001ABCD' Statistic 'average' Metrics CPU percent: 0.44 | 'SQL001ABCD~average#azmysql.cpu.utilization.percentage'=0.44;0:80;0:90;0;100
```

La commande ci-dessus vérifie les statistiques l'utilisation du *processeur* de l'instance *Azure Database for MySQL* nommée *SQL001ABCD*
(```--plugin=cloud::azure::database::mysql::plugin --mode=cpu --resource='SQL001ABCD'```) et liée au *Resource Group* *RSG1234*
(```--resource-group='RSG1234'```).

Le mode de connexion utilisé est 'api' (```--custommode=api```), les paramètres d'authentification nécessaires à l'utilisation de ce mode
sont donc renseignés en fonction (```--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'```).

Les statuts caculés se baseront sur les valeurs totales d'un échantillon dans un intervalle de 15 minutes / 900 secondes  (```--timeframe='900'```) 
avec un état retourné par tranche de 5 minutes (```--interval='PT5M'```).

Dans cet exemple, une alarme de type WARNING sera déclenchée si le pourcentage d'utilisation du processeur pendant l'intervalle donné
est supérieur à 80 (```--warning-cpu-usage='80'```); l'alarme sera de type CRITICAL au-delà de 90%.
(```--critical-cpu-usage='90'```).

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \
    --plugin=cloud::azure::database::mysql::plugin \
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
